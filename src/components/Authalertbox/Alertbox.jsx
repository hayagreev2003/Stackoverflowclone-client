import React from 'react';
import './AlertBox.css';

const AlertBox = ({ message, onClose }) => {
  return (
    <div className='alert-overlay'>
      <div className='alert-box'>
        <div className='alert-message'>{message}</div>
        <button className='alert-button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertBox;
