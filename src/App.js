import React from 'react';
import RegistrationPage from './components/registration/registrationpage';
import MemberPage from './components/UI/card/memberspage';
import ApiData from './components/UI/backendapidata';
import MemberProfile from './components/UI/card/MemberProfile';
import LoginPage from './components/login/loginpage';
import ResetPassword from './components/resetpassword/resetpassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './components/UI/Screen/HomeScreen/homescreen';
import UserProfile from './components/UI/Screen/UserProfile/userprofile';
import Home from './components/Landing page/Home/Home';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/registrationpage" element={<RegistrationPage />} />
          <Route path="/backendapidata" element={<ApiData />} />
          <Route path="/members" element={<MemberPage />} />
          <Route path="/memberprofile" element={<MemberProfile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path ="/registration" element={<RegistrationPage />} />
          <Route path="/resetpassword" element={<ResetPassword />} /> 
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Router>



  );
}

export default App;
