import React from "react";
import "./HomeScreen.css";
import droidd_logo from '../StaticImages/ddroidd_logo.svg';
import destructuring from '../StaticImages/destructuring.svg';
import WebPage_logo from '../StaticImages/WebPage_logo.svg';
import {useNavigate} from 'react-router-dom';

const HomeScreen = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/applicationform');
    }

    return ( <div className="home-screen">

        {/* Header section */}
        <div className="header-section">
            <div className="header-logo-container">
                <img src={droidd_logo} alt="header-logo" className="header-logo"/>
            </div>
            <div className="event-container">
                <p className="event-title">Autumn - Winter Bootcamp</p>
            </div>
            <div className="button-container">
                <button  onClick={navigateTo} className="custom-button">Join Us</button>
            </div>
        </div>
      
        {/* Mid section */}
        <div className="mid-section">
            <div className="logos-container">
                <div className="destrcturing-img-container">
                    <img src={destructuring} alt="destrcturing" className="destrcturing-img"></img>
                </div>
                <div className="web-page-logo-img-container">
                    <img src={WebPage_logo} alt="WebPage_logo" className="web-page-logo-img"></img>
                </div>
            </div>
            
            <div className="button-container-mid-section">
                <button onClick={navigateTo} className="custom-button">Join Us</button>
            </div>

        </div>

        {/* Footer section */}
        <div className="footer-section">
            <div className="footer-text-container">
                <p className="footer-text" >Come to the dark side... we have</p>
            </div>
        </div>
    </div>
    )
}

export default HomeScreen;