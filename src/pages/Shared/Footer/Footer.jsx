import React from "react";
import { Container } from "react-bootstrap";
import { FaAppStore, FaAppStoreIos, FaAppleAlt, FaApplePay, FaFacebookF, FaGooglePay, FaGooglePlay, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ background: "black" }} className="mt-4 py-4">
      <Container >
        <div className="row row-cols-1 row-cols-md-4 g-2">
          <div className=" text-white">
            <h3 style={{ color: "darkseagreen", cursor: "pointer" }}>
              Know Us
            </h3>

            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Business Partnership</p>
          </div>
          <div className="text-white">
            <h3 style={{ color: "darkseagreen", cursor: "pointer" }}>
              Our Policies
            </h3>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Editorial Policy</p>
            <p>IP Policy</p>
          </div>
          <div className="text-white">
            <h3 style={{ color: "darkseagreen", cursor: "pointer" }}>
            Connect
            </h3>
            <p>Social Links</p>
            <span className="d-flex gap-2" style={{fontSize:'20px',color:'yellowGreen'}}>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube/>
                <FaLinkedin/>
            </span>
            <button className="mt-2 px-4 py-2 rounded" style={{background:'yellowGreen'}}>Sign UP</button>

          </div>
          <div className="text-white">
            <h3 style={{ color: "darkseagreen", cursor: "pointer" }}>
            Download App
            </h3>
            <div style={{background:'gray'}} className="rounded d-flex py-2 px-4 gap-2 align-items-center">
            <FaGooglePlay style={{fontSize:'26px'}} />
           <div>
          <p> GET IT ON</p>
            <p>Google Play</p>
           </div>
            </div>
            <div style={{background:'gray'}} className="mt-2 rounded d-flex py-2 px-4 gap-2 align-items-center">
            <FaAppleAlt style={{fontSize:'26px'}} />
           <div>
          <p> Download on the</p>
            <p>Apple Store</p>
           </div>
            </div>
           
          </div>
          <div></div>
        </div>
        <div  className="text-white text-center mt-4">
            <p>Copyright © 1996-2023 RecipesBD All rights reserved.</p>
          
        </div>
      </Container>

    </div>
  );
};

export default Footer;
