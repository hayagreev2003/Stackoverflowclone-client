import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Home_one.css'
import personSearch from '../../assets/person-search.svg';
import robot from '../../assets/robot.svg'

import { Link } from 'react-router-dom';
import Payment from '../Subscription/Payment';

const Home1 = () => {
    return (
        <>
            <Navbar />
            <LeftSidebar />
            <div className='stack-home-page'></div>
            <div className='stackhome-content'>
            <div className='stackhome-container'>
                <div className='stackhome-left'>
                    <div className="stackhome-message">
                        <div className='stackmessage-top'>
                            <img src={personSearch} alt='imag' />
                            <div className='stackmessage-content'>
                                Find the best answer to your technical question from best technical experts ( & you can make friends ), help others answer theirs
                            </div>
                        </div>
                        <div className='stacklogin-link'>
                            <Link to='/signup' className='login-link' style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}><p>Join The Community</p></Link>
                        </div>
                        <div className='stacklink-question'>
                            or&nbsp;<Link to='/Questions' className='questions-link'>Search Content</Link>
                        </div>
                        <div className="stackhome-message-arrow">
                        </div>
                    </div>
                </div>

                {/* <div className='stackhome-right'>
                    <div className="stackhome-message-1">
                        <div className='stackmessage-top-1'>
                            <img src={robot} alt='imag' />
                            <div className='stackmessage-content-1'>
                                Login/Signup here to use of Chat Ai to resolve your Queries or doubts fastly without waiting for other users reply.
                            </div>
                        </div>
                        <div className='stackchatbot-link'>
                            <Link to='/chatbot' className='chatbot-link' style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}><p>ChatBot</p></Link>
                        </div>
                        <div className="stackhome-message-arrow-1">
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className='pricing'>
                <a href='#pricing'> <p>Purchase the Subscription to get more features in affordable prices</p></a>
                </div> */}

            </div>

            {/* <div className='home-subscription' id='pricing'>
                <Payment/>
            </div> */}
        </>
    )
}

export default Home1