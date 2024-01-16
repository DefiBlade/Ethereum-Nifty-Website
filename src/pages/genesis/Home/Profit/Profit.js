import './Profit.scss';
import { PieChart } from 'react-minimal-pie-chart';
import ProgressBar from '@ramonak/react-progress-bar';

const left = [
    {
        title : 'Project Creator',
        value : 25,
        color: '#3D88FB',
        baseColor: 'rgba(61, 136, 251, 0.12)'
    },
    {
        title : 'Project Manager',
        value : 10,
        color : '#5637C8',
        baseColor: 'rgba(86, 55, 200, 0.12)'
    },
    {
        title : 'Artist',
        value : 22.5,
        color : '#00D89E',
        baseColor: 'rgba(0, 216, 158, 0.12)'
    },
    {
        title : 'Marketing Team',
        value : 10,
        color : '#00FFFF',
        baseColor: 'rgba(0, 255, 255, 0.12)'
    },
    {
        title : 'Discord and Comm. Mngr',
        value : 2.5,
        color : '#76A5AF',
        baseColor: 'rgba(118, 165, 175, 0.12)'
    },
]

const right = [
    {
        title: 'Web Dev',
        value: 5,
        color: '#F39E39',
        baseColor: 'rgba(243, 158, 57, 0.12)'
    },
    {
        title : 'Smart Contract Dev',
        value : 10,
        color: '#DFDF11',
        baseColor: 'rgba(223, 223, 17, 0.12)'
    },
    {
        title : 'Community Wallet',
        value : 5,
        color: '#FC3352',
        baseColor: 'rgba(252, 51, 82, 0.12)'
    },
    {
        title : 'Nifty.io',
        value : 10,
        color : '#DFDF11',
        baseColor: 'rgba(223, 223, 17, 0.12)'
    },
]

const Profit = () => {
    let index = 0
    let chartData = []
    chartData = [...left]
    chartData.push(...right)
    return (
        <div className="profit">
            <div className="container">
                <div
                    style={{
                        width: '100%',
                        top: 0,
                        height: '500px',
                        left: 0,
                        position: 'absolute',
                        background: `url("${ require('../../../../assets/genesis/images/bg12.png').default }")`
                    }}
                ></div>
                <div className="profit-title">
                    Build Together, Profit Together*
                </div>
                <div className="profit-content">
                    <div className="profit-description">
                        When your NFT project is built within the Nifty.io ecosystem, you share in the revenue of the project. 
                        *Each project will be divided based upon the unique needs of the project and agreed upon before development.
                    </div>
                    <div className="example-project">
                        <div className="example-project-button">
                            EXAMPLE PROJECT DISTRIBUTION*
                        </div>
                    </div>
                </div>
                <div className="chart-section">
                    <div className="collapse-chart">
                        <PieChart
                        data={chartData}
                        />
                    </div>
                    <div className="left-progress">
                        { left.map( e => 
                        <div className="row-progress" key={index ++}>
                            <div className="progress-title">{e.title}: {e.value}%</div>
                            <ProgressBar completed={e.value} height={'10px'} bgColor={`${e.color}`} baseBgColor={`${e.baseColor}`} customLabel=' ' />
                        </div>
                        )}
                        
                        {/* <ProgressBar completed={60} height={10} customLabel=' ' />
                        <ProgressBar completed={60} height={10} customLabel=' ' />
                        <ProgressBar completed={60} height={10} customLabel=' ' /> */}
                    </div>
                    <div className="chart">
                        <PieChart
                        data={chartData}
                        />
                    </div>
                    <div className="right-progress">
                        { right.map( e => 
                        <div className="row-progress" key={index ++}>
                            <div className="progress-title">{e.title}: {e.value}%</div>
                            <ProgressBar completed={e.value} height={'10px'} bgColor={`${e.color}`} baseBgColor={`${e.baseColor}`} customLabel=' ' />
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profit;