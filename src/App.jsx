import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Twitch from './pages/Twitch';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FourOhFour from './pages/FourOhFour';
import ComingSoon from './components/ComingSoon/ComingSoon';

const App = () => {
  const isMaintenance = false;

  return (
    <>

    { isMaintenance ? <ComingSoon /> : (
      
      
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/twitch" element={<Twitch />} />
          <Route path='/terms-of-service' element={<Terms />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>

    ) }

    </>    
  )
}

export default App