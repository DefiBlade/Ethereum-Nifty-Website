import './Roadmap.scss';

const data = [
    {
        title: 'January 2022 Nifty.io Members’ Portal',
        sub: 'Live at nifty.io/projects Genesis holders can access the portal now. Start submitting ideas and alpha.',
        pending: false
    },
    {
        title: 'January 2022 Nifty Pass Mint',
        sub: '5,555 Nifty Passes launching on the Ethereum blockchain providing access to the Nifty.io Members’ Portal and whitelisting for future projects.',
        pending: false
    },
    {
        title: 'February 2022 PFP Project',
        sub: 'An amazing PFP project to rally behind. Let’s vibe and build community. Your Nifty Pass provides whitelist and a 50% discount during presale.',
        pending: true
    },
    {
        title: 'February 2022 Vote for 1st Community Project',
        sub: 'Nifty Pass holders will vote for the project they would like to see developed first by the Nifty.io community.',
        pending: true
    },
    {
        title: 'Q2 2022 IRL + web3 Project',
        sub: 'We open global sales of ICOblock token, so all investors on the globe can purchase and sell our ICO easily',
        pending: true
    },
    {
        title: 'April 2022 Community Project',
        sub: 'Our community goal is to launch the first commununity created NFT project as voted on by our members.',
        pending: true
    }
]

const Roadmap = () => {
    let index = 0
    return (
        <div className="roadmap" id="roadmap">
            <div className="container">
                <div
                    style={{
                        width: '100%',
                        bottom: '180px',
                        height: '360px',
                        left: 0,
                        position: 'absolute',
                        backgroundRepeat: 'no-repeat',
                        background: `url("${ require('../../../../assets/genesis/images/bg08.png').default }")`
                    }}
                ></div>
                <div
                    style={{
                        width: '100%',
                        top: 'calc(50% - 250px)',
                        height: '500px',
                        left: 0,
                        position: 'absolute',
                        backgroundRepeat: 'no-repeat',
                        background: `url("${ require('../../../../assets/genesis/images/bg10.png').default }")`
                    }}
                ></div>
                <div className="roadmap-title">
                    Ro<span className="point">adm</span>ap
                </div>
                <div className="roadmap-content">
                    <div className="roadmap-card-container">
                        {data.map ( e => 
                        <div className="row" key={index ++}>
                            <div className="roadmap-card">
                                <div className="roadmap-card-title">
                                    <div className="image">
                                        {e.pending 
                                        ?
                                            <div style={{
                                                borderRadius: '50px',
                                                border: '1px solid',
                                                padding: '16px',
                                                backgroundColor: 'white'
                                            }}></div>
                                        :   <img src={ require('../../../../assets/genesis/images/check.png').default } />
                                        }
                                        
                                    </div>
                                    <div className="title">
                                        { e.title }
                                    </div>
                                </div>
                                <div className="roadmap-card-content">
                                    { e.sub }
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;