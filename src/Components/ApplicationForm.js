import React, { useState, useEffect } from 'react';
import './ApplicationForm.css';
import droidd_logo from '../StaticImages/ddroidd_logo.svg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom';

const ApplicationForm = ({ formData, setFormData }) => {
    const [validated, setValidated] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
    // Fetch the list of countries
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then((res) => res.json())
            .then((result) => {
            setCountries(result.data);
            })
            .catch((error) => {
            console.error(error);
        });
    }, []);

    const handleCountryChangee = (e) => {
        const selectedCountryValue = e.target.value;
        setSelectedCountry(selectedCountryValue);
        // Fetch the states of the selected country
    };

    const handleStateChangee = (e) => {
        const selectedStateValue = e.target.value;
        setSelectedState(selectedStateValue);
    };

    const handelFirstNameChange = (event) => {
        const firstNameValue = event.target.value;
        setFormData({ ...formData, firstName: firstNameValue });
    }

    const handleLastNameChange = (event) => {
        const lastNameValue = event.target.value;
        setFormData({ ...formData, lastName: lastNameValue });
    };

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setFormData({ ...formData, email: emailValue });
    };

    const handlePhoneChange = (event) => {
        const phoneValue = event.target.value;
        setFormData({ ...formData, phoneNumber: phoneValue });
    };

    const handleAddressLine1Change = (event) => {
        const addressLine1Value = event.target.value;
        setFormData({ ...formData, addressLine1: addressLine1Value });
    };
      
    const handleAddressLine2Change = (event) => {
        const addressLine2Value = event.target.value;
        setFormData({ ...formData, addressLine2: addressLine2Value });
    };

    const handleCountryChange = (event) => {
        const selectedCountryValue = event.target.value;
        setFormData({ ...formData, country: selectedCountryValue });
    };
      
    const handleStateChange = (event) => {
        const selectedStateValue = event.target.value;
        setFormData({ ...formData, state: selectedStateValue });
    };
      
    const handleCityChange = (event) => {
        const selectedCityValue = event.target.value;
        setFormData({ ...formData, city: selectedCityValue });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
          setErrors({});
    
          if (!formData.firstName) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              firstName: 'First name is required',
            }));
          }
          if (!formData.lastName) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              lastName: 'Last name is required',
            }));
          }
          if (!formData.email) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: 'Email is required',
            }));
          }
          if (!formData.phoneNumber) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              phoneNumber: 'Phone number is required',
            }));
          }
          if (!formData.addressLine1 || !formData.addressLine2) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              address: 'Address is required',
            }));
          }
          if (!formData.city) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              city: 'City is required',
            }));
          }
    
          if (Object.keys(errors).length === 0) {
            navigate('/submitform');
          }
        }
        setValidated(true);
    };    

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
      
       {/* Form section */}
       <div className="mid-section">
            <h1 className="application-form-title">Application Form</h1>
            <div className="application-form-container">
                <div className="contact-information-container">
                <h3 className="contact-information-header">Contact Information</h3>
                </div>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required type="text" placeholder="First name" defaultValue="Mark" value={formData.firstName} onChange={handelFirstNameChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" value={formData.lastName} onChange={handleLastNameChange} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <Form.Label>Email Address</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="email" placeholder="Email Address" aria-describedby="inputGroupPrepend" value={formData.email} onChange={handleEmailChange} required />
                        <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="text" placeholder="Phone Number" aria-describedby="inputGroupPrepend" value={formData.phoneNumber} onChange={handlePhoneChange} required />
                        <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                </Row>
                <div className="address-container">
                    <h3 className="adress-header">Address</h3>
                </div>
                <Form.Group controlId="validationCustomAddress1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control required type="text" placeholder="Address Line 1" value={formData.addressLine1} onChange={handleAddressLine1Change} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomAddress2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control required type="text" placeholder="Address Line 2" value={formData.addressLine2} onChange={handleAddressLine2Change} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Country</Form.Label>
                    <Form.Select value={formData.country} onChange={handleCountryChange} required>
                        <option value="">Select a country</option>
                        {countries.map((country, index) => (
                        <option key={index} value={country.iso2}>
                            {country.country}
                        </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a country.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Select value={formData.state} onChange={handleStateChange} required>
                        <option value="">Select a state</option>
                        {states.map((state, index) => (
                        <option key={index} value={state.id}>
                            {state.name}
                        </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a state.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                    <Form.Label>City</Form.Label>
                    <Form.Select value={formData.city} onChange={handleCityChange} required>
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Please select a city.</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="button-container-mid-section">
                    <button className="custom-button" type="submit">Join Us</button>
                </div>
                </Form>
            </div>
        </div>

        {/* Footer section */}
        <div className="footer-section">
            <div className="footer-text-container">
                <p className="footer-text">Come to the dark side... we have</p>
            </div>
        </div>
    </div>
    );
}

export default ApplicationForm;