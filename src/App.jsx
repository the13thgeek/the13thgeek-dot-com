import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Twitch from './pages/Twitch';
import FourOhFour from './pages/FourOhFour';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Analytics from './components/Analytics/Analytics';

const App = () => {
  const isMaintenance = false;

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID);
  },[]);

  return (
    <>

    { isMaintenance ? <ComingSoon /> : (     
      
      <HelmetProvider>
        <Router>
          <Analytics />
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/twitch" element={<Twitch />} />
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </Router>
      </HelmetProvider>

    ) }

    </>    
  )
}

export default App