import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo1.png"; // Replace with your logo image path
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from '@mui/icons-material/Email';
import CircleIcon from '@mui/icons-material/Circle';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="iLogicPlus Logo" className="footer-logo-image" />
        </div>

        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
                 <CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/home">Home</a>
            </li>
            <li>
             <CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/company">Company</a>
            </li>
            <li>  <CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/leadership">Executive Leadership</a>
            </li>
            <li>  <CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/services">Our Services</a>
            </li>
            <li>  <CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li> 
                <CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/software-development">Software Development</a>
            </li>
            <li><CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/web-development">Web Development</a>
            </li>
            <li><CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/community-meetups">Community Meetups</a>
            </li>
            <li><CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/cloud-devops">Cloud and DevOps</a>
            </li>
            <li><CircleIcon style={{fontSize:'small', marginRight:'4px', color:'#732691', }}/>
              <a href="/product-design">Product Design</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>iLogicPlus Solutions</p>
          <p>Drishya Building, Kinfra Film IT and Video Park, Kazhakuttom</p>
          <p>Thiruvananthapuram - 695581, Kerala, India</p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <AddIcCallIcon style={{ marginRight: "8px" }} /> +91 6238 870 610
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <EmailIcon style={{ marginRight: "8px" }}/>
            <a href="mailto:info@ilogicplus.com">info@ilogicplus.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright 2024 <span className="footer-brand">iLogicPlus</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
