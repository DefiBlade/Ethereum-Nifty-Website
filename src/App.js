import './App.scss';
import Project from './pages/project/Project/Project';
import Proposal from './pages/project/Proposal/Proposal';
import Outside from './pages/project/Outside/Outside';
import Profile from './pages/project/Profile/Profile';
import Web3 from 'web3';
import { database } from './config/firebase';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import GenesisHome from './pages/genesis/Home/index';
import NiftyHome from './pages/nifty/Home/Home';
import MemberHome from './pages/member/Home/Home';
import ProjectHome from './pages/project/Home/Home';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';


function App() {
	const [walletAddress, setAddress] = useState('');
	const [userInfo, setUserInfo] = useState({})
	const [userLoad, setUserLoad] = useState(false) 
	const [reload, setReload] = useState(false)
	
	useEffect( async () => {
	await walletConnect()
	}, [walletAddress, userInfo ? userInfo.username : userInfo, reload] )

	const walletConnect = async () => {
		if(window.ethereum) {
			window.web3 = new Web3(window.ethereum)
			await window.ethereum.enable()
			const account = await window.web3.eth.getAccounts()
			setAddress(account[0])
			if(account[0]) {
			getUserInfo(account[0])
			}
		} else if(window.web3) {
			window.web3 = new Web3(window.web3.currentProvider) 
			const account = await window.web3.eth.getAccounts()
			setAddress(account[0])
			if(account[0]) {
			getUserInfo(account[0])
			}
		} else {
			window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
		}
	}

	const changeReload = (e) => {
	setReload(e)
	}

	const changeUserLoad = (e) => {
	setUserLoad(e)
	}

	const getUserInfo = (accountAddress) => {
	const userRef = database.ref('member_profile')
	userRef.get().then( (snapshot) => {
		if(snapshot.exists()) {
		const newAry = snapshot.val()
		if(newAry) {
			let existUser = false
			for(let i in newAry) {
				let data = newAry[i]
				if(data.wallet == accountAddress) {
					data.id = i
					existUser = true
					setUserInfo(data)
					setUserLoad(true)
					break
				}
			}

			if(!existUser) {
				setUserLoad(-1)
			}
		} else {
			setUserLoad(-1)
		}
		
		} else {
		setUserLoad(-1)
		}
	}).catch(e => {
		setUserLoad(-2)
	})
	}
  return (
    <BrowserRouter>
      	<Routes>
			<Route path='/' element={<GenesisHome />} />
			<Route path='/genesis-pass' element={<NiftyHome />} />
			<Route path='/members' element={<Navigate replace to="/member" />}  />
			<Route path='/projects' element={<Navigate replace to="/project" />}  />
			<Route path='/member' element={<MemberHome walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />} />
			<Route path="/member/:t" element={<MemberHome walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload}  />} />
			<Route path="/project/" element={<ProjectHome walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />} />
			<Route path="/project/:t" element={<ProjectHome walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />} />
			<Route path="/project/project/:id/:t" element={<Project walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />} />
			<Route path="/project/proposal" element={<Proposal walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />}  />
			<Route path="/project/proposal/:id" element={<Proposal walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />} />
			<Route path="/project/outside" element={<Outside walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />}/>      
			<Route path="/project/outside/:id" element={<Outside walletConnect={walletConnect} walletAddress={walletAddress} userInfo={userInfo} userLoad={userLoad} reload={reload} changeReload={changeReload} />} />      
		</Routes>
		<NotificationContainer />
	</BrowserRouter>
  );
}

export default App;
