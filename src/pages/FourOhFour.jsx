import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const FourOhFour = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <p>404 Page Not Found</p>
      </main>
      <Footer />
    </div>
  )
}

export default FourOhFour