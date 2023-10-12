import React from 'react';
import { useState } from 'react';
import HomeScreen from './Components/HomeScreen';
import ApplicationForm from './Components/ApplicationForm';
import SubmitForm from './Components/SubmitForm';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    state: '',
    city: '',
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/applicationform" element={<ApplicationForm formData={formData} setFormData={setFormData} />} />
          <Route path='/submitform' element={<SubmitForm formData={formData} setFormData={setFormData} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;