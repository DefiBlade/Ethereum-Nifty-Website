import './Platform.scss';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        height: '90vh',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const data = [
    {
        avatar: <img src={ require('../../../../assets/genesis/images/timestamp.png').default } />,
        title: 'Save time together',
        description: 'Build on top of the Nifty.io ecosystem and work together to deliver faster. '
    },
    {
        avatar: <img src={ require('../../../../assets/genesis/images/proof-of-capacity.png').default } />,
        title: 'The community votes',
        description: 'Rank, comment and vote on the project you would like to see developed.'
    },
    {
        avatar: <img src={ require('../../../../assets/genesis/images/withdraw.png').default } />,
        title: 'Built on web3',
        description: 'Connect your wallet to verify your Nifty Pass. Then set up a profile and submit a project idea or alpha.'
    },
    {
        avatar: <img src={ require('../../../../assets/genesis/images/decentralized-02.png').default } />,
        title: 'Network and build',
        description: 'Organize the pieces of a project you still need and receive applicants to help.'
    },
]

const Platform = () => {
    let subtitle;
    let index = 0

    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className="platform">
            <div className="container">
                <div className="platform-header">
                    <div className="platform-title">
                        <div className="title">Nifty Members' Community Creation Platform</div>
                        <div className="description">
                            Have an idea for creating an awesome NFT project? 
                            Let your fellow community members help you build it.
                        </div>
                    </div>
                    {/* <div className="seemore">
                        See more&nbsp;
                        <img src={ require('../../../assets/images/Arrow.png') } />
                    </div> */}
                </div>
                <div className="platform-content">
                    <div className="services">
                        { data.map( (e) => 
                        <div className="service-card" key={index ++}>
                            <div className="service-avatar">
                                <div className="service-image-container">
                                    {e.avatar}
                                </div>
                            </div>
                            <div className="service-content">
                                <div className="service-title">
                                    {e.title}
                                </div>
                                <div className="service-description">
                                    {e.description}
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="nifty-project">
                        {/* <img src={ require('../../../../assets/genesis/images/Nifty-Projects.png').default } /> */}
                            <video autoPlay muted loop={true} style={{ cursor: 'pointer' }}>
                                <source src={ require('../../../../assets/genesis/images/ProjectSubmission.mp4').default }></source>
                            </video>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                {/* <button onClick={closeModal}>close</button> */}
                <video autoPlay muted loop={true} style={{ height: '100%', width: '100%' }}>
                    <source src={ require('../../../../assets/genesis/images/ProjectSubmission.mp4').default }></source>
                </video>
            </Modal>
        </div>
    );
}

export default Platform;