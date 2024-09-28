import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import FieldNoteSingle from './pages/FieldNoteSingle';
import Twitch from './pages/Twitch';
import FourOhFour from './pages/FourOhFour';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Analytics from './components/Analytics/Analytics';
import FieldNotes from './pages/FieldNotes';

const App = () => {
  const isMaintenance = false;

  useEffect(() => {
    if(import.meta.env.MODE === 'production') {
      ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID);
    }
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
            <Route path="/field-notes" element={<FieldNotes /> } />
            <Route path="/field-notes/:slug" element={<FieldNoteSingle />} />
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