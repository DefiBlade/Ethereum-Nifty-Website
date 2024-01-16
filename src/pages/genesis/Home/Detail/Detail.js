import './Detail.scss';

const data = [
    [
    {
        title: 'Presale',
        description: '1/24/2022 (10:00AM CST)'
    },
    {
        title: 'Public Sale',
        description: '1/26/2022 (9:00AM CST)'
    },
    {
        title: 'Blockchain',
        description: 'Ethereum'
    }],[
    {
        title: 'Supply',
        description: '5,555'
    },
    {
        title: 'Price',
        description: '1 for 0.05, 2 for 0.09, 3 for 0.12'
    },
    {
        title: 'Max Mints',
        description: '6 mints per wallet'
    }],
]

const attributeData = [
    {
        title: 'Nifty Pass',
        center: 'All',
        sub : 'Utility NFTs'
    },
    {
        title: 'Nodestone',
        center: '43',
        sub : 'Stone Designs'
    },
    {
        title: 'Power Level',
        center: '7',
        sub : 'Used for Whitelisting'
    },
    {
        title: 'Realm',
        center: '5',
        sub : 'Elemental Realms'
    },
    {
        title: 'One of Ones',
        center: '25',
        sub : 'Unique Art Pieces'
    },
]
const Detail = () => {
    let index = 0
    return (
        <div className="detail">
            <div className="container">
                <div className="detail-header">
                    <div className="detail-title">Nifty P<span className="point">ass D</span>etails</div>
                    <div className="detail-description">Here’s everything you need to know about the supply, price, and important dates.</div>
                </div>
                <div className="detail-container">
                    {data.map( e => 
                        <div className="detail-box" key={index ++}>
                            <div className="detail-card">
                                <div className="title">
                                    {e[0].title}
                                </div>
                                <div className="description">
                                    {e[0].description}
                                </div>
                            </div>
                            <div className="detail-card">
                                <div className="title">
                                    {e[1].title}
                                </div>
                                <div className="description">
                                    {e[1].description}
                                </div>
                            </div>
                            <div className="detail-card">
                                <div className="title">
                                    {e[2].title}
                                </div>
                                <div className="description">
                                    {e[2].description}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="detail-attribute">
                    <div
                        style={{
                            width: '100%',
                            top: 0,
                            height: '686px',
                            left: 0,
                            position: 'absolute',
                            background: `url("${ require('../../../../assets/genesis/images/bg02.png').default }")`
                        }}
                    ></div>
                    <div className="detail-attribute-title">
                        Attributes of Nifty Passes
                    </div>
                    <div className="detail-attribute-collapse-preview">
                        <img src={ require('../../../../assets/genesis/images/NiftyDetail.png').default } />
                    </div>
                    <div className="detail-attribute-info">
                        <div className="detail-attribute-progress">
                            {attributeData.map( e => 
                            <div className="circles" key={index ++}>
                                <img src={ require('../../../../assets/genesis/images/Circle.png').default} />
                                <div className="line"></div>
                            </div>
                            )}
                        </div>
                        <div className="detail-attribute-container">
                            { attributeData.map( e => 
                            <div className="detail-attribute-card" key={index ++}>
                                <div className="title">
                                    {e.title}
                                </div>
                                <div className="center">
                                    {e.center}
                                </div>
                                <div className="sub">
                                    {e.sub}
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="detail-attribute-preview">
                        <img src={ require('../../../../assets/genesis/images/NiftyDetail.png').default } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;