import React, { useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import './Pages.scss';

const Terms = () => {

    useEffect(() => {
        document.title = "Terms of Service | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    }, []);


  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
            <h1>Terms of Service</h1>
            <h2>Introduction</h2>
            <p>Welcome to <b>the13thgeek&trade;</b>. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree to all of these terms, please do not use our website.</p>
            <h2>Use of the Website</h2>
            <ul>
                <li>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.</li>
                <li>You may not misuse our site by knowingly introducing viruses, trojans, worms, or other material that is malicious or technologically harmful.</li>
            </ul>
            <h2>Intellectual Property</h2>
            <ul>
                <li>All content on this website, including text, graphics, logos, images, and software, is the property of [Your Website Name] or its content suppliers and is protected by international copyright laws.</li>
                <li>You may not reproduce, duplicate, copy, sell, or otherwise exploit any content on the site without express written permission.</li>
            </ul>
            <h2>Limitation of Liability</h2>
            <ul>
                <li><b>the13thgeek&trade;</b> is not liable for any damages arising out of or related to your use of the website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</li>
            </ul>
            <h2>Governing Law</h2>
            <ul>
                <li>These Terms of Use shall be governed by and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law principles.</li>
            </ul>
            <h2>Changes to Terms of Use</h2>
            <ul>
                <li>I reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of those changes.</li>
            </ul>
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Use, please contact me.</p>
        </div>
        
      </main>
      <Footer />
    </div>
  )
}

export default Terms