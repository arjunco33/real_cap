import React from 'react';
import './MainScreen.css';
import mainscreenimg from '../../Assets/mainscreenimg.png'; // Replace with your image path
import Page1 from '../Page1';

const MainScreen = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={mainscreenimg} alt="Sample" className="main-image" />
      </div>
      <div className="text-container">
        <h2>iLogicPlus is your trusted source in IT Service and Support</h2>
        <p>
          iLogicPlus specializes in Information Technology and Business Process Outsourcing. 
          iLogicPlus has been able to provide outsourcing opportunities in the areas of Information 
          Technology and Business Advisory Services for clients operating in different industries 
          across the globe.
        </p>
        <p>
          With the use of high-end technology, state-of-the-art infrastructure, qualified personnel 
          and stringent quality/process control iLogicPlus delivers world-class services to its customers.
        </p>
        <a  className="read-more">
          Read More
        </a>
      </div>
      
    </div>
  );
};

export default MainScreen;
