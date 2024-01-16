import './Pass.scss';

const data = [
    [
    {
        avatar:  <img src={ require('../../../../assets/genesis/images/fomo.png').default } />,
        title: 'No more FOMO!',
        sub: "There's no need to fight for whitelist spots or waste your valuable time! Nifty Passes whitelist you for NFT mints on every project. "
    },
    {
        avatar: <img src={ require('../../../../assets/genesis/images/fiat-money.png').default } />,
        title: 'Save 50% off Public Mint Price',
        sub: 'Nifty Passes are your discount membership to all projects developed by the Nifty.io team and community. ',
    }],
    [
    {
        avatar: <img src={ require('../../../../assets/genesis/images/encrypted.png').default } />,
        title: 'Exclusive Access',
        sub: 'Only Nifty Pass holders will be able to view projects and vote on which ones get developed. ',
    },
    {
        avatar: <img src={ require('../../../../assets/genesis/images/Group.png').default } />,
        title: 'Building a Network',
        sub: 'By working together we can advance web3 and make NFT projects sustainable for all involved. ',
    }]
]

const Pass = () => {
    let index = 0
    return (
        <div className="pass" id="pass">
            <div className="container">
                <div className="pass-title">What do I ge<span className="point">t with</span> a Nifty Pass?</div>
                <div className="pass-container">
                    {data.map( (e) => 
                    <div className="pass-box" key={index ++}>
                        <div className="pass-card">
                            <div className="pass-avatar">
                                {e[0].avatar}
                            </div>
                            <div className="pass-content">
                                <div className="title">
                                    {e[0].title}
                                </div>
                                <div className="sub-title">
                                    {e[0].sub}
                                </div>
                            </div>
                        </div>
                        <div className="pass-card">
                            <div className="pass-avatar">
                                {e[1].avatar}
                            </div>
                            <div className="pass-content">
                                <div className="title">
                                    {e[1].title}
                                </div>
                                <div className="sub-title">
                                    {e[1].sub}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Pass;