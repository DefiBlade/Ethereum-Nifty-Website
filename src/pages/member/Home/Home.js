import './Home.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Header from '../../../components/member/Header/Header';
import Profile from '../../../components/member/Profile/Profile';
import Web3 from 'web3';
import { PROJECT_URL } from '../../../config/server';
// import 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MemberHome = (props) => {
  const [walletAddress, setAddress] = useState('');
  const [init, setInit] = useState(true);
  const { t } = useParams()

  useEffect( async () => {
      await walletConnect()
  }, [walletAddress[0]])

  const walletConnect = async () => {
      if(window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
          setAddress(await window.web3.eth.getAccounts())
      } else if(window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
          setAddress(await window.web3.eth.getAccounts())
      } else {
          window.alert('Non-Ethereum browser detected. Your should consider trying MetaMask!')
      }
  }
  return (
    <div className="member">
      <Header connect={walletConnect} address={walletAddress[0]} projectUrl={PROJECT_URL} />
      <Profile  
        walletConnect={walletConnect} 
        userInfo={props.userInfo} 
        userLoad={props.userLoad} 
        reload={props.reload} 
        changeReload={props.changeReload} 
        address={walletAddress[0]}
        projectUrl={PROJECT_URL} />
      <NotificationContainer />
    </div>
  );
}

export default MemberHome;
