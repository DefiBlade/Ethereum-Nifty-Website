import { useState } from "react";
import "./NodeStone.scss";
import topTransition from "../../../assets/nifty/img/nodestone/SectionTransition2 1.svg";
import bottomTransition from "../../../assets/nifty/img/nodestone/bottom.svg";
import title from "../../../assets/nifty/img/nodestone/NodestonesLogo 1.png";
import jewelLeft from "../../../assets/nifty/img/nodestone/Amethyst-Left 1.png";
import jewelRight from "../../../assets/nifty/img/nodestone/Aquamarine-Right 1.png";
import { NotificationManager } from "react-notifications";

import mintBtn from "../../../assets/nifty/img/nodestone/mintBtn.svg";
import mintAniBtn from "../../../assets/nifty/img/nodestone/mintBtnAnimation.gif";
import MinusBtn from "../../../assets/nifty/img/nodestone/Minus.svg";
import PlusBtn from "../../../assets/nifty/img/nodestone/Plus.svg";

export const NodeStone = ({ mintLoading, walletAddress, onMintHandler }) => {
  const [number, setNumber] = useState(1);

  const mintAction = () => {
    onMintHandler(number);
    // NotificationManager.info('Mint action currently unavailable! Please retry on launch date.');
  };

  const showNotification = () => {
    NotificationManager.info('Nodestones V2 coming soon…');
  }

  return (
    <section className="nodeStone" id="nodeStone">
      <div className="nodeStone__topTransition">
        <img alt="top" src={topTransition}></img>
      </div>

      <div className="nodeStone__main">
        <div className="nodeStone__main__jewelLeft">
          <img alt="jewel" src={jewelLeft}></img>
        </div>
        <div className="nodeStone__main__jewelRight">
          <img alt="jewel" src={jewelRight}></img>
        </div>

        <div className="nodeStone__main__mint">
          <button
            className="nodeStone__main__mint__place"
            onClick={() => showNotification()}
          >
            <img src={mintLoading ? mintAniBtn : mintBtn} alt="pic"></img>
          </button>

          <div className="nodeStone__main__mint__counter">
            <button
              onClick={() =>
                number > 1 ? setNumber((prev) => prev - 1) : null
              }
            >
              <img src={MinusBtn} alt="pic1"></img>
            </button>
            <div>{number}</div>
            <button
              onClick={() =>
                number < 5 ? setNumber((prev) => prev + 1) : null
              }
            >
              <img src={PlusBtn} alt="pic1"></img>
            </button>
          </div>
        </div>

        <div className="nodeStone__main__title">
          <img alt="title" src={title}></img>
        </div>

        <div className="container">
          <div className="nodeStone__main__desc">
            Congrats (and a BIG thank you) to those who minted. You are now a
            member of Nodestones Genesis. The rest will have to wait! Phase II
            coming soon...
          </div>

          {/* <div className="nodeStone__main__content">
            Nodestones are randomly minted on the Ethereum blockchain using 42
            precious stone designs. There are 20 1:1 Nodestones hidden in the
            mint.  Nodestones have a trait that places you into 1 of 5 realms
            and act as a future minting pass across the nifty ecosystem.  Each
            Nodestone has 7 Power Levels creating unique utility. All Nodestones
            are minted randomly by Fair Distribution at 0.1 ETH.
          </div> */}
        </div>
      </div>

      <div className="nodeStone__bottomTransition">
        <img alt="top" src={bottomTransition}></img>
      </div>
    </section>
  );
};

export default NodeStone;
