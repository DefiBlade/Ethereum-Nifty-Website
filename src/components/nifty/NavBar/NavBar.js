import './NavBar.scss';
import logo from '../../../assets/nifty/img/nav/NiftyLogo 1.svg';
import discordIcon from '../../../assets/nifty/img/nav/DiscordIcon 1.svg';
import openSeaIcon from '../../../assets/nifty/img/nav/OpenSeaIcon-Blk 1.svg';
import twitterIcon from '../../../assets/nifty/img/nav/TwitterIcon 1.svg';
import { Link } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';
import {NotificationManager} from 'react-notifications';

export const NavBar = ({
    walletAddress,
    onConnectWalletHandler
}) => {
    const connectWallet = () => {
        NotificationManager.info('Wallet connection currently unavailable! Please retry on launch date.');
    }

    return (
        <nav className="navBar">
            <div className="navBar__icons">
                <RouteLink to='/' className="navBar__icons__logo">
                    <img src={logo} alt="logo"></img>
                </RouteLink>

                <div className="navBar__icons__wrapper">




                    <a href='https://twitter.com/nifty_io' className="navBar__icons__social">
                        <img src={twitterIcon} alt="logo"></img>
                    </a>

                    <a href='http://discord.gg/nifty' className="navBar__icons__social">
                        <img src={discordIcon} alt="logo"></img>
                    </a>

                    <a href='https://opensea.io/collection/nodestones' className="navBar__icons__social">
                        <img src={openSeaIcon} alt="logo"></img>
                    </a>

                    <a href='https://medium.com/@nifty.io/the-new-renaissance-2ba6b029e88b' className="navBar__icons__text">
                        WhitePaper
                    </a>

                                        <a href='/project' className="navBar__icons__text">
                        Projects
                    </a>

                    <a href='/member' className="navBar__icons__text">
                        Members
                    </a>

                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to="trailer"
                        className="navBar__icons__text"
                        offset={-50}
                    >
                        Trailer
                    </Link>
                </div>

                <div className="navBar__dropDownMenu">
                    <button className="navBar__dropDownMenu__icon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </button>
                    <div className="navBar__dropDownMenu__content">

                    <a href='/project' >
                        Projects
                    </a>

                    <a href='/member'>
                        Members
                    </a>

                        <a href='https://twitter.com/nifty_io'>Twitter</a>

                        <a href='http://discord.gg/nifty'>Discord</a>

                        <a href='https://opensea.io/collection/nodestones'>OpenSea</a>

                        <a href='https://medium.com/@nifty.io/the-new-renaissance-2ba6b029e88b'>WhitePaper</a>

                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="trailer"
                            offset={-50}
                        >
                            Trailer
                        </Link>
                    </div>
                </div>
            </div>

            <div className="navBar__btn">
                <button className="navBar__btn__connect" onClick={ () => onConnectWalletHandler() }>
                    {walletAddress === "" ? ( "Connect Wallet"): walletAddress}
                </button>
            </div>
        </nav>
    )
}

export default NavBar;