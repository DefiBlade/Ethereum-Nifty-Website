import './Home.scss';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import NavBar from "../../../components/nifty/NavBar/NavBar";
import Intro from "../../../components/nifty/Intro/Intro";
import NodeStone from "../../../components/nifty/NodeStone/NodeStone";
import Gallery from "../../../components/nifty/Gallery/Gallery";
import Trailer from "../../../components/nifty/Trailer/Trailer";
import Vision from "../../../components/nifty/Vision/Vision";
import RoadMap from "../../../components/nifty/RoadMap/RoadMap";
import Realm from "../../../components/nifty/Realm/Realm";
import Team from "../../../components/nifty/Team/Team";
import Footer from "../../../components/nifty/Footer/Footer";
import { useState, useEffect } from "react";
import { mintNFT, mintFeeNFT } from "../../../helpers/interact";
import { connectWallet, getCurrentWalletConnected } from "../../../helpers/wallet";
import { getIsWhiteList } from "../../../helpers/contract";
import { NotificationManager } from "react-notifications";

export const NiftyHome = () => {
  const [isWhiteList, setIsWhiteList] = useState(false);
  const [mintLoading, setMintLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        const { address, status } = await getCurrentWalletConnected();
        setWalletAddress(address);
        setStatus(status);
        onChangeWalletListener();
        onConnectWalletHandler();
      }
    };

    initDatas();
  }, []);

  const onConnectWalletHandler = async () => {
    if (window.ethereum) {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
      await onWhiteListHandler(walletResponse.address);
    } else {
      NotificationManager.success(
        "🦊 You must install Metamask in your browser"
      );
    }
  };

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0]);
          onWhiteListHandler(accounts[0]);
          setStatus("Get your NodeStones, 0.1ETH");
        } else {
          setWalletAddress("");
          setStatus("Connect Metamask");
        }
      });

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler();
      });
    } else {
      setStatus(
        <p>
          🦊 You must install Metamask, a virtual Ethereum wallet, in your
          browser.(https://metamask.io/download.html)
        </p>
      );
    }
  };

  const onWhiteListHandler = async (walletAddress) => {
    const whiteNum = await getIsWhiteList(walletAddress);
    setIsWhiteList(whiteNum > 0 ? true : false);
  };

  const onMintHandler = async (amount) => {
    if (!!walletAddress) {
      setMintLoading(true);

      if (isWhiteList) {
        const { success, status } = await mintFeeNFT(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          setStatus("Congratulations. Nodestones are successfully minted !");
          NotificationManager.success(
            "Congratulations. Nodestones are  successfully minted !"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          setStatus("Info", "You don't have enough eths to mint Nodestones!");
          NotificationManager.info(
            "Info. You don't have enough eths to mint Nodestones!"
          );
        } else if (status.indexOf("presale is not open") >= 0) {
          NotificationManager.info("Presale is not open !");
        } else if (
          status.indexOf("this address is not whitelisted for the presale") >= 0
        ) {
          NotificationManager.info(
            "This address is not whitelisted for the presale !"
          );
        } else if (
          status.indexOf(
            "this address is not allowed to mint that many during the presale"
          ) >= 0
        ) {
          NotificationManager.info(
            "This address is not allowed to mint that many during the presale!"
          );
        } else if (
          status.indexOf("this stakeholder is not allowed to mint that many") >=
          0
        ) {
          NotificationManager.info(
            "This stakeholder is not allowed to mint that many for free!"
          );
        } else {
          NotificationManager.info("Transaction is failed !");
        }
      } else {
        const { success, status } = await mintNFT(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          setStatus("Congratulations", "Nodestones are  successfully minted !");
          NotificationManager.success(
            "Congratulations. Nodestones are  successfully minted!"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          setStatus("Info", "You don't have enough eths to mint Nodestones!");
          NotificationManager.info(
            "You don't have enough eths to mint Nodestones!"
          );
        } else if (status.indexOf("presale is not open") >= 0) {
          NotificationManager.info("Presale is not open!");
        } else if (
          status.indexOf("this address is not whitelisted for the presale") >= 0
        ) {
          NotificationManager.info(
            "This address is not whitelisted for the presale!"
          );
        } else if (
          status.indexOf(
            "this address is not allowed to mint that many during the presale"
          ) >= 0
        ) {
          NotificationManager.info(
            "This address is not allowed to mint that many during the presale!"
          );
        } else {
          NotificationManager.info("Transaction is failed!");
        }
      }
    }
  };

  return (
    <div className="nifty-home">
      <NavBar
        walletAddress={walletAddress}
        onConnectWalletHandler={onConnectWalletHandler}
      />
      <Intro />
      <NodeStone
        mintLoading={mintLoading}
        walletAddress={walletAddress}
        onMintHandler={onMintHandler}
      />
      <Gallery />
      <Trailer />
      <Vision />
      <RoadMap />
      <Realm />
      <Team />
      <Footer />
      <NotificationContainer />
    </div>
  );
};

export default NiftyHome;
