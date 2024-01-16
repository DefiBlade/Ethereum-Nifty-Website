import './Contact.scss';
import { useState, useEffect } from 'react';
import { database } from '../../../../config/firebase';

const Contact = ({NotificationManager}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        const load = {
            name: name,
            email: email
        }

        const databaseRef   = database.ref('emails');
        const newRef    = databaseRef.push()
        newRef.set(load)  
        window.scrollTo(0, 0)
        NotificationManager.success('Subscription is successfully submitted.', 'Success', 3000)
        setName('')
        setEmail('')
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="urls">
                    <div className="url-row">
                        <div className="url">
                            <img src={ require('../../../../assets/genesis/images/etherscan-logo 1.png').default } />
                        </div>
                        <div className="url">
                            <img src={ require('../../../../assets/genesis/images/Rarible 1.png').default } />
                        </div>
                    </div>
                    <div className="url-row">
                        <div className="url">
                            <img src={ require('../../../../assets/genesis/images/OpenSea-Full-Logo (dark) 1.png').default } />
                        </div>
                        <div className="url">
                            <img src={ require('../../../../assets/genesis/images/h-lightbg@512 1.png').default } />
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="news-box">
                        <div className="content">
                            <div className="title">
                                Subscribe to News
                            </div>
                            <div className="sub">
                                Sign up to receive updates from Nifty.io
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="subscribe">
                            <input type="text" placeholder="Name" required onChange={changeName} value={name} />
                            <input type="email" placeholder="Email Address" required onChange={changeEmail} value={email} />
                            <button type="submit" className="button" onClick={handleSubmit}>
                                <img src={ require('../../../../assets/genesis/images/icons/light.png').default } />
                                &nbsp;SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;