import './Concept.scss';
const Concept = () => {
    return (
        <div className="concept" id="concept">
            <div className="container">
                <div className="collapse-preview">
                    <img src={ require('../../../../assets/genesis/images/Nifty Pass Feature 2.gif').default } />
                </div>
                <div className="overview">
                    <div className="question">Wh<span className="point">at is N</span>ifty.io ?</div>
                    <div className="answer">
                        Nifty.io is an NFT Platform focused on developing projects as a community.
                        Holding a Nifty Pass gives you access to "Community Based Creation" and the entire Nifty.io ecosystem.
                    </div>
                </div>
                <div className="diagram">
                    <div className="preview">
                        <img src={ require('../../../../assets/genesis/images/Nifty Pass Feature 2.gif').default } />
                    </div>
                    <div className="advantage">
                        <div className="row">
                            <div className="col">
                                <div className="image">
                                    <img src={ require('../../../../assets/genesis/images/user-group.png').default } />
                                </div>
                                <div className="line"></div>
                                <div className="content">
                                    <div className="title">
                                        Community Based Creation
                                    </div>
                                    <div className="description">
                                        Nifty Pass holders build together. 
                                        Participate in a project and earn from the revenues of that project!* Voted on by the community.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="image">
                                    <img src={ require('../../../../assets/genesis/images/earth.png').default} />
                                </div>
                                <div className="line"></div>
                                <div className="content">
                                    <div className="title">
                                        Always Whitelisted With a Discount 
                                    </div>
                                    <div className="description">
                                        Nifty Passes have “Power Level” that whitelist you for upcoming projects. 
                                        You also receive a discount on all mints created by Nifty.io and the community.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="image">
                                    <img src={ require('../../../../assets/genesis/images/circle-star.png').default} />
                                </div>
                                <div className="content">
                                    <div className="title">
                                        Share Alpha and Rank Projects
                                    </div>
                                    <div className="description">
                                        Nifty.io takes alpha to another level. 
                                        Share projects and rank them based on important factors that lead to successful projects.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concept;