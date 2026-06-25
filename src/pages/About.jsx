import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award } from 'lucide-react';
import './Home.css';

const About = () => {
  return (
    <div className="home-page" style={{ paddingTop: '140px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: '600', color: 'rgb(18, 18, 20)', marginBottom: '1rem' }}
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'rgb(18, 18, 20)' }}
        >
          We are the shield that guards the digital realm of enterprise businesses worldwide.
        </motion.p>
      </div>

      <section className="container" style={{ marginTop: '4rem', marginBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
          >
            <Shield size={40} color="#8ECCF2" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>Our Mission</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>
              To provide impenetrable security frameworks and unyielding infrastructure support, allowing enterprises to scale without fear of cyber threats or operational downtime.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card"
            style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
          >
            <Target size={40} color="#FED4AC" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>Our Approach</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>
              We believe in proactive defense. We don't just respond to incidents; we architect Zero Trust environments that eliminate vulnerabilities before they can be exploited.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card"
            style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
          >
            <Award size={40} color="#8ECCF2" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>Our Legacy</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>
              With over a decade of experience and hundreds of global enterprise partners, we have established a reputation for absolute reliability and technical excellence.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: '#f8f9fa', padding: '6rem 0', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#000', marginBottom: '0.5rem' }}>150+</h2>
            <p style={{ fontSize: '16px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Security Experts</p>
          </div>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#000', marginBottom: '0.5rem' }}>24/7</h2>
            <p style={{ fontSize: '16px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Global SOC</p>
          </div>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#000', marginBottom: '0.5rem' }}>0</h2>
            <p style={{ fontSize: '16px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Breaches to Date</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
