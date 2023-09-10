import React from 'react';

import trophy from '../../assets/trophy-icon.svg';
import chaticon from '../../assets/chat-question-icon.svg';
import sorticon from '../../assets/sort-arrows-icon.svg';

const AboutAuth = () => {
  return (
    <div className='auth-container-1'>
      <h1>Join th Stack Overflow community</h1>
      <p>
        <img src={chaticon} width='20px' height='20px' alt='chaticon' style={{alignItems:'center'}}/> Get unstuck -- ask question
      </p>
      <p>
      <img src={sorticon} width='20px' height='20px' alt='sorticon' style={{alignItems:'center'}}/> Unlock new privileges like voting and commenting
      </p>
      <p>
        <i className='fa fa-tags' width='20px' style={{color:'#5577E6', alignItems:'center'}}></i> Save your favorite tags, filters, and jobs
      </p>
      <p>
        <img src={trophy} width='20px' height='20px' alt="trophy" style={{alignItems:'center'}} /> Earn reputation and badges
      </p>
      <p style={{ color: "#666767", fontSize: "13px" }}> Collaborate and share information with a private group for</p>
      <p style={{ color: "#007ac6", fontSize: "13px" }}> Get Stack Overflow for Teams free for up to 50 users.</p>
    </div>
  )
}

export default AboutAuth;
