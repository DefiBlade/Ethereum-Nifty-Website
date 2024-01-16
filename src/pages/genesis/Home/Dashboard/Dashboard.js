import './Dashboard.scss';
import { useState } from 'react';
import { NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import mintBtn from "../../../../assets/genesis/images/icons/light.png";
import mintAniBtn from "../../../../assets/genesis/images/icons/blinking-bolt.gif";


const Dashboard = ({ mintLoading, walletAddress, onMintHandler }) => {
    const [mintCount, setMintCount] = useState(1)
    const min = 1
    const max = 3

    const mintAction = () => {
        // NotificationManager.success('Mint action currently unavailable! Please retry on launch date.');
        onMintHandler(mintCount);
    };

    const increaseMint = () => {
        if (mintCount === max) setMintCount(mintCount)
        else setMintCount(mintCount + 1)
    }

    const decreaseMint = () => {
        if(mintCount === min) {
            setMintCount(mintCount)   
        } else {
            setMintCount(mintCount - 1)
        }
    }
    return (
        <div className="dashboard" id="dashboard">
            <div className="container">
                {/* <div className="bg"
                    style={{
                        background: `url("${require('../../../assets/images/_bg.png')}")`,
                        backgroundSize: '100% 100%',
                        zIndex: -1
                    }}
                ></div> */}
                <div className="community">
                    <div className="works">
                        <div className="play">
                            <img src={ require('../../../../assets/genesis/images/icons/play.png').default} />
                        </div>
                        <div className="how">
                            <a href="https://youtu.be/SVVVv4kkJoo" target="_blank">Video see how it works</a>
                        </div>
                    </div>
                    <div className="community-introduce">
                        <div className="community-title">
                            Community Based Creation.
                        </div>
                        <div className="community-description">
                            Nifty.io is the first community driven NFT development platform of this type and scope. 
                            The Nifty Pass is your key across the ecosystem.
                        </div>
                    </div>
                    <div className="pass-mint">
                        <button className="mint-button" onClick={() => mintAction()}>
                            <img src={ mintLoading ? mintAniBtn : mintBtn }/>
                            &nbsp;{ mintLoading ? "Minting..." : "MINT NIFTY PASS" } 
                        </button>
                        <div className="mint-count-control">
                            <div className="mint-count-button">
                                <div className="minus">
                                    <div className="minus-internal" onClick={decreaseMint}>-</div>
                                </div>
                                <div className="mint-count">{mintCount}</div>
                                <div className="plus">
                                    <div className="plus-internal" onClick={increaseMint}>+</div>
                                </div>
                            </div>
                            <div className="mint-count-label">
                                AMOUNT
                            </div>
                        </div>
                    </div>
                </div>
                <div className="phone">
                    <div className="phone-preview">
                        <img src={ require('../../../../assets/genesis/images/Nifty pass.png').default } />
                    </div>
                    <div className="works">
                        <div className="play">
                            <img src={ require('../../../../assets/genesis/images/icons/play.png').default} />
                        </div>
                        <div className="how">
                            <a href="https://youtu.be/SVVVv4kkJoo" target="_blank">Video see how it works</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;