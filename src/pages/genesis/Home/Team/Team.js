import './Team.scss';

const data = [
    [{
        url : require('../../../../assets/genesis/images/team1.png').default,
        title : 'Blake Moser',
        sub : 'Co-founder & CEO'
    },
    {
        url : require('../../../../assets/genesis/images/team2.png').default,
        title : 'JB Patterson',
        sub : 'Co-founder & Chief Design Officer'
    }],
    [{
        url : require('../../../../assets/genesis/images/team3.png').default,
        title : 'Cody Boyd',
        sub : 'Co-founder & CFO'
    },
    {
        url : require('../../../../assets/genesis/images/team4.png').default,
        title : 'Dmitrii Medinsky',
        sub : 'Smart Contract Developer'
    }],
]
const Team = () => {
    let index = 0
    return (
        <div className="genesis-team" id="team">
            <div className="container">
                <div className="team-title">Team Members</div>
                <div className="team-description">
                    At Nifty.io you are a part of the team. 
                    Our community opporates similar to a DAO. 
                    We work together to improve NFT projects and advance web3.
                </div>
                <div className="team-container">
                    {data.map( e => 
                    <div className="member-box" key={index ++}>
                        <div className="member-card">
                            <div className="member-preview"
                                style={{
                                    // background: `url("${e[0].url}")`,
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100%'
                                }}
                            >
                                <img src={ e[0].url } style={{ width: '100%', height: '100%'}} />
                            </div>
                            <div className="member-info">
                                <div className="title">
                                    {e[0].title}
                                </div>
                                <div className="sub">
                                    {e[0].sub}
                                </div>
                            </div>
                        </div>
                        <div className="member-card">
                            <div className="member-preview"
                                style={{
                                    // background: `url("${e[1].url}")`,
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100%'
                                }}
                            >
                                <img src={ e[1].url } style={{ width: '100%', height: '100%'}} />
                            </div>
                            <div className="member-info">
                                <div className="title">
                                    {e[1].title}
                                </div>
                                <div className="sub">
                                    {e[1].sub}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Team;