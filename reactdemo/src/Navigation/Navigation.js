import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from '../screens/NavBar/NavBar';
import AboutUs from "../screens/AboutUs/AboutUs";
import ContactUS from '../screens/ContactUS/ContactUS';
import Page1 from '../screens/Page1';
import MainScreen from '../screens/MainScreen/MainScreen';

const Navigation = () => {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainScreen />} /> {/* Default route to MainScreen */}
          <Route path="/page1" element={<Page1 />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
      </Router>
    );
  };
  
  export default Navigation;