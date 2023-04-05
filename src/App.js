import React from 'react';
import RegistrationPage from './components/registration/registrationpage';
import MemberPage from './components/UI/card/memberspage';
import ApiData from './components/UI/backendapidata';
import Userprofile from './components/UI/card/userprofile';
import LoginPage from './components/login/loginpage';
import ResetPassword from './components/resetpassword/resetpassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './components/UI/Screen/HomeScreen/homescreen';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/backendapidata" element={<ApiData />} />
          <Route path="/members" element={<MemberPage />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path ="/registration" element={<RegistrationPage />} />
          <Route path="/resetpassword" element={<ResetPassword />} /> 
          <Route path="/homescreen" element={<HomeScreen />} />
        </Routes>
      </Router>



  );
}

export default App;
