import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="genesis-navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src={require('../../../assets/genesis/images/icons/NiftyLogo.png').default} />
                        </Link>
                    </div>
                    <div className="navs">
                        <div className="nav-link">
                            <a href="#concept">WHAT IS NIFTY.IO</a>
                        </div>
                        <div className="nav-link">
                            <a href="#pass">NIFTY PASS</a>
                        </div>
                        <div className="nav-link">
                            <a href="#roadmap">ROADMAP</a>
                        </div>
                        <div className="nav-link">
                            <a href="#team">TEAM</a>
                        </div>
                        <div className="nav-link">
                            <Link to="/member">MEMBERS</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/projects">PROJECTS</Link>
                        </div>
                    </div>
                </div>
                <div className="external">
                    <div className="external-link">
                        <a href="https://discord.gg/nifty_io">
                            <img src={ require('../../../assets/genesis/images/icons/discord.png').default } />
                        </a>
                    </div>
                    <div className="external-link">
                        <a href="https://twitter.com/nifty_io">
                            <img src={ require('../../../assets/genesis/images/icons/twitter.png').default } />
                        </a>
                    </div>
                    <div className="external-link">
                        <a href="https://opensea.io/collection/nifty-pass-v2">
                            <img src={ require('../../../assets/genesis/images/icons/opensea.png').default } />
                        </a>
                    </div>
                </div>
                <div className="collapse">
                    <div className="toggle-collapse">
                        <img src={ require('../../../assets/genesis/images/icons/toggler.png').default } />
                        <div className="collapse-navs">
                            
                            <div className="nav-link">
                                <a href="#concept">WHAT IS NIFTY.IO</a>
                            </div>
                            <div className="nav-link">
                                <a href="#pass">NIFTY PASS</a>
                            </div>
                            <div className="nav-link">
                                <a href="#roadmap">ROADMAP</a>
                            </div>
                            <div className="nav-link">
                                <a href="#team">TEAM</a>
                            </div>
                            <div className="nav-link">
                                <Link to="/member">MEMBERS</Link>
                            </div>
                            <div className="nav-link">
                                <Link to="/projects">PROJECTS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;