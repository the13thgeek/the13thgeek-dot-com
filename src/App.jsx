import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Twitch from './pages/Twitch';
import FourOhFour from './pages/FourOhFour';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/twitch" element={<Twitch />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>
    </>
  )
}

export default App