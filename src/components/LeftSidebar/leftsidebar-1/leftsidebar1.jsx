import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import Globe from '../../../assets/Globe.svg'
import './leftsidebar1.css'


const LeftSidebar1 = () => {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <>
      <div className='left-side-bar1'>
        <div className='menu-icons1' onClick={handleClick}>
          <i className={state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <div className={state.clicked ? 'left-sidebar-content1 active' : 'left-sidebar-content1'}>
            <nav className='side-nav1'>

              <NavLink to='/' className='side-nav1-links' activeclassname='active' >
                <p>Home</p>
              </NavLink>
              
              <div className='side-nav1-div'>
                <div>
                  <p>Public</p>
                </div>

                <NavLink to='/Questions' className='side-nav1-links' activeclassname='active'>
                  <img src={Globe} alt='Globe' />
                  <p style={{ paddingLeft: "10px" }}>Questions </p>
                </NavLink>

                <NavLink to='/Tags' className='side-nav1-links' activeclassname='active' style={{ paddingLeft: "40px" }} >
                  <p>Tags</p>
                </NavLink>

                <NavLink to='/Users' className='side-nav1-links' activeclassname='active' style={{ paddingLeft: "40px" }} >
                  <p>Users</p>
                </NavLink>

                <NavLink to="/Community" className="side-nav1-links" activeclassname="active" style={{ paddingLeft: "40px" }} >
                  <p>Stack Community</p>
                </NavLink>

                {/* <NavLink to="/Payment" className="side-nav1-links" activeclassname="active" style={{ paddingLeft: "40px" }} >
                  <p>Subscription</p>
                </NavLink> */}
                
              </div>
            </nav>
          </div>
      </div>
    </>
  );
};

export default LeftSidebar1;