import React, { useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PrivacyPolicy = () => {

    useEffect(() => {
        document.title = "Privacy Policy | " + import.meta.env.VITE_GLOBAL_SITE_TITLE;
    }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
            <h1>Privacy Policy</h1>
            <p>At <b>{import.meta.env.VITE_GLOBAL_SITE_TITLE}</b>, we respect your privacy and are committed to protecting it through our compliance with this policy.</p>
            <h2>Information We Collect</h2>
            <ul>
                <li><b>Personal Information:</b> We may collect personal information such as your name, email address, and other contact details when you register on our site or subscribe to our services.</li>
                <li><b>Usage Data:</b> We collect information about your interactions with our website, including pages visited, links clicked, and other actions taken.</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <ul>
                <li><b>To provide services:</b> we use your personal information to provide and manage our services, including processing transactions and providing customer support.</li>
                <li><b>To improve the site: </b>we analyze usage data to improve our website's content and functionality.</li>
                <li><b>Marketing:</b> with your consent, we may use your information to send you promotional content and updates about our services.</li>
            </ul>
            <h2>Sharing Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except for trusted third parties who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            <h2>Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. You can do this by contacting us.</p>
            <h2>Cookies</h2>
            <p>We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but doing so may affect your ability to use certain features of our site.</p>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it regularly.</p>
            <h2>Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy