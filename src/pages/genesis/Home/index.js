import 'react-notifications/lib/notifications.css';
import Concept from "./Concept/Concept";
import Dashboard from "./Dashboard/Dashboard";
import Detail from "./Detail/Detail";
import Pass from "./Pass/Pass";
import Platform from "./Platform/Platform";
import Profit from "./Profit/Profit";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Header from "../../../components/genesis/Header/Header";
import Footer from "../../../components/genesis/Footer/Footer";

import { useState, useEffect } from "react";
import { mintPass } from "../../../helpers/interact";
import { connectWallet, getCurrentWalletConnected } from "../../../helpers/wallet";
import { NotificationManager } from "react-notifications";


const GenesisHome = () => {

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


  const onMintHandler = async (amount) => {
    if (!!walletAddress) {
      setMintLoading(true);

      console.log("OnMintHandler")

        const { success, status } = await mintPass(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          NotificationManager.success(
            "Congratulations. NiftyPass are  successfully minted!"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          NotificationManager.info(
            "You don't have enough eths to mint NiftyPass!"
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
        } else if (status.indexOf("Exceeded max token purchase")) {
            NotificationManager.info("Exceeded max token purchase per wallet");
        } 
        
        else {
          NotificationManager.info("Transaction is failed!");
        }
      
    }
  };


    return (
        <div className="genesis">
            <Header />
            <Dashboard 
                mintLoading={mintLoading}
                walletAddress={walletAddress}
                onMintHandler={onMintHandler}
            />
            <Concept />
            <Pass />
            <Platform />
            <Profit />
            <Detail />
            <Roadmap />
            <Team />
            <Contact NotificationManager={NotificationManager} />
            <Footer />
        </div>
    );
}

export default GenesisHome;