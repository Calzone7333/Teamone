import { Link } from 'react-router-dom';
import { Shield, Globe, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-text">TEAM 1</span>
          </Link>
          <p className="footer-tagline">"Securing Infrastructure. Protecting Data. Empowering Business."</p>

        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <Link to="/services">Server Data Encryption</Link>
            <Link to="/services">Threat Monitoring</Link>
            <Link to="/services">Vulnerability Assessment</Link>
          </div>
          <div className="footer-column" style={{ maxWidth: '250px' }}>
            <h4>Contact Details</h4>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#000' }}>32, 1st Main Road,<br />Ayyappa Nagar, Virugambakkam,<br />Chennai – 600092</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '14px', color: '#000' }}>+91 9940778529</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#000' }}>info@team1.in</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>TEAM 1 SECURITY SERVICES & ALLIED SERVICES. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
