
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './Sidebar/Sidebar/SideBar';
import ErrorPage from './components/ErrorPage';
import './App.css'
const App = () => {
  return (
    <Router>
        <Navbar />
        
        <SideBar/>
      
       

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/students" element={<Students />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      {/* </SideBar> */}
        
    </Router>
  );
};

export default App;
// RajaKu-School-wapsite