import React from "react";
import "./HomeScreen.css";
import droidd_logo from '../StaticImages/ddroidd_logo.svg';


const SubmitForm = ({ formData, setFormData }) => {


    return ( <div className="home-screen">

        {/* Header section */}
        <div className="header-section">
            <div className="header-logo-container">
                <img src={droidd_logo} alt="header-logo" className="header-logo"/>
            </div>
            <div className="event-container">
                <p className="event-title">Autumn - Winter Bootcamp</p>
            </div>
    
        </div>
      
        {/* Mid section */}
        <div className="mid-section">
            <h1>Excellent!</h1>
            <h1>See you in November 2023!</h1>
            <div>
                <h2>Submission Summary:</h2>
                <p>First name: {formData.firstName}</p>
                <p>Last nam: {formData.lastName}</p>
                <p>Phone numer: {formData.phoneNumber}</p>
                <p>Email: {formData.email}</p>
                <p>Address: {formData.addressLine1}, {formData.addressLine2}</p>
                <p>Country: {formData.country}</p>
                <p>State: {formData.state}</p>
                <p>City: {formData.city}</p>
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

export default SubmitForm ;