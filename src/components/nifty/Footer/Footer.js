import './Footer.scss';

import logo from '../../../assets/nifty/img/footer/NiftyLogoWhite 1.svg';

import discordIcon from '../../../assets/nifty/img/footer/DiscordIcon-White 1.svg';
import openSeaIcon from '../../../assets/nifty/img/footer/OpenSeaIcon-White 1.svg';
import twitterIcon from '../../../assets/nifty/img/footer/TwitterIcon-White 1.svg';
import lockerIcon from '../../../assets/nifty/img/footer/locker.svg';

import { Link } from 'react-scroll'

export const Footer = () => {
    return (
        <section className="footer">
            <div className="container">

                <div className="footer__logo">
                    <img alt="logo" src={logo}></img>
                </div>

                <div className="footer__links">
                    <div className="footer__links__icons">
                        <a href="https://twitter.com/nifty_io"><img src={twitterIcon} alt="logo"></img></a>
                        <a href="http://discord.gg/nifty"><img src={discordIcon} alt="logo"></img></a>
                        <a href="https://opensea.io/collection/nodestones"><img src={openSeaIcon} alt="logo"></img></a>
                    </div>

                    <div className="footer__links__first">
                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="nodeStone"
                            offset={-70}
                        >
                            Nodestones
                        </Link>

                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="vision"
                            offset={-50}
                        >
                            Our Vision
                        </Link>

                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="roadMap"
                            offset={-50}
                        >
                            Roadmap
                        </Link>
                    </div>

                    <div className="footer__links__second">
                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="realm"
                            offset={-50}
                        >
                            Realms
                        </Link>

                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="team"
                            offset={-50}
                        >
                            Team
                        </Link>
                        <a href="https://etherscan.io/token/0xc01c24c1c63f405c394769cf3e5949cfcb9ef093">Smart Contract</a>
                    </div>

                    <div className="footer__links__third">
                        <a href="#javascript;" className="disable">Knights of the Ledger <img alt="iconpic" src={lockerIcon}></img></a>
                        <a href="#javascript;" className="disable">Ex Machina <img alt="iconpic" src={lockerIcon}></img></a>
                        <a href="https://docs.google.com/document/d/1hBFJQ9wjeuJrcQEp4hHw9Bo7VGb93mvkEc3VIzQmvss/edit">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;