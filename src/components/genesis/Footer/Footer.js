import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="genesis-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="nifty">
                        <img src={ require('../../../assets/genesis/images/icons/NiftyLogoWhite.png').default } />
                        <div className="nifty-description">
                            Grab a Nifty Pass and begin building with us through our Community Based Creation Members’ Portal.
                        </div>
                    </div>
                    <div className="middle">
                        <div className="company">
                            <div className="company-title">COMPANY</div>
                            <div className="links">
                                <div className="link">
                                    <a href="#dashboard">About</a>
                                </div>
                                <div className="link">
                                    <a href="#pass">Nifty Pass</a>
                                </div>
                                <div className="link">
                                    <a href="#roadmap">Roadmap</a>
                                </div>
                                <div className="link">
                                    <a href="#team">Team</a>
                                </div>
                            </div>
                        </div>
                        <div className="portal">
                            <div className="portal-title">Member's Portal</div>
                            <div className="links">
                                <div className="link">
                                    <a href="#dashboard">Mint Now</a>
                                </div>
                                <div className="link">
                                    <Link to="/member">Profile</Link>
                                </div>
                                <div className="link">
                                    <Link to="/project">Projects</Link>
                                </div>
                                <div className="link">
                                    <Link to="/member">Members</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="follow">
                        <div className="follow-title">
                            Follow us on official links:
                        </div>
                        <div className="links">
                            <a href="https://twitter.com/nifty_io">
                                <img src={ require('../../../assets/genesis/images/icons/TwitterWhite.png').default } />
                            </a>
                            <a href="https://facebook.com/nifty.io">
                                <img src={ require('../../../assets/genesis/images/icons/facebook.png').default } />
                            </a>
                            <a href="https://linkedin.com/company/nifty-io">
                                <img src={ require('../../../assets/genesis/images/icons/linkedin.png').default } />
                            </a>
                            <a href="https://instagram.com/nifty.io">
                                <img src={ require('../../../assets/genesis/images/icons/instagram.png').default } />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2022. All rights reserved by Nifty.io
                </div>
            </div>
        </div>
    );
}

export default Footer;