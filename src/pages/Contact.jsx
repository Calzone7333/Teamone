import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Home.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  // PLACEHOLDER URL: Replace this with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({ ...status, error: 'Name and Email are required.' });
      return;
    }
    
    setStatus({ submitting: true, success: false, error: '' });

    try {
      // We use no-cors mode to avoid CORS issues when sending to Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      setStatus({ submitting: false, success: true, error: '' });
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="home-page" style={{ paddingTop: '140px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: '600', color: 'rgb(18, 18, 20)', marginBottom: '1rem' }}
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'rgb(18, 18, 20)' }}
        >
          Get in touch with our specialists. We are here to assist you with your requirements.
        </motion.p>
      </div>

      <section className="container" style={{ marginTop: '2rem', marginBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }}>
          
          {/* Contact Details (Full width grid on top) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card"
              style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><MapPin size={32} color="#8ECCF2" /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>Headquarters</h3>
              <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>32, 1st Main Road,<br/>Ayyappa Nagar, Virugambakkam,<br/>Chennai – 600092</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card"
              style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Phone size={32} color="#FED4AC" /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>Voice Support</h3>
              <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>+91 7200097677<br/>Mon-Fri: 9AM - 6PM IST</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card"
              style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Mail size={32} color="#8ECCF2" /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>Email Inquiries</h3>
              <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>info@team1.com<br/>Average response: 24 Hrs</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card"
            style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto', width: '100%' }}
          >
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1rem', color: '#000', textAlign: 'center' }}>Send us a Message</h3>
            
            {status.success && (
              <div style={{ background: '#dcfce7', color: '#166534', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', fontSize: '14px', fontWeight: '500' }}>
                Message sent successfully! We will get back to you soon.
              </div>
            )}
            {status.error && (
              <div style={{ background: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', fontSize: '14px', fontWeight: '500' }}>
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: '#fff', color: '#000', fontFamily: 'inherit', fontSize: '16px' }} placeholder="John Doe" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>Work Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: '#fff', color: '#000', fontFamily: 'inherit', fontSize: '16px' }} placeholder="john@company.com" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: '#fff', color: '#000', fontFamily: 'inherit', fontSize: '16px' }} placeholder="Enterprise Inc." />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>How can we help you?</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', background: '#fff', color: '#000', fontFamily: 'inherit', fontSize: '16px', resize: 'vertical' }} placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" disabled={status.submitting} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #8ECCF2, #FED4AC)', color: '#000', border: 'none', padding: '1rem', marginTop: '1rem', width: '100%', fontWeight: '700', opacity: status.submitting ? 0.7 : 1, cursor: status.submitting ? 'not-allowed' : 'pointer' }}>
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Map Section */}
        <div style={{ marginTop: '4rem', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.4021434979863!2d80.18824307321152!3d13.063853112852767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267324f4ab783%3A0x5a5319e17f3a0a4b!2sGayathri%20Thiruvengadam%20%26%20Associates!5e1!3m2!1sen!2sin!4v1770635103522!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </section>
    </div>
  );
};

export default Contact;
