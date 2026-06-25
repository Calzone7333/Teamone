import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Lock, Activity, Users, Globe, ChevronRight, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Enterprise-Grade Server Data Security <br/>
            & Managed Infrastructure
          </motion.h1>
          
          <div className="hero-bottom-row">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle-box"
            >
              <p className="hero-bottom-text" style={{ maxWidth: '300px' }}>
                Unlock development capacity, remove biggest delivery blockers and see your raw metrics improve
              </p>
              <div className="arrow-divider" style={{ display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                <ArrowRight size={16} color="#666" />
              </div>
              <p className="hero-bottom-text" style={{ maxWidth: '200px' }}>
                All without refocusing your core team
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rating-box"
            >
              <div className="rating-score">4.8/5 <span className="rating-stars">★★★★★</span></div>
              <div className="rating-text">impartial reviews on clutch.co</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Features (moved below hero) */}
      <section className="features-section container" style={{ marginTop: '2rem' }}>
        <div className="hero-features">
          {['24/7 Monitoring', 'Zero Trust Security', '99.99% Uptime', 'Global Threat Protection'].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card feature-card"
            >
              <h4 className="m-0" style={{ color: 'var(--color-cyber-blue)' }}>{feature}</h4>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Core Services */}
      <section className="services-section container" style={{ marginTop: '8rem' }}>
        <h2 className="section-title">Core <span className="text-gradient">Services</span></h2>
        <p className="section-subtitle">Comprehensive cybersecurity frameworks and managed infrastructure solutions.</p>
        
        <div className="services-grid">
          {[
            { title: 'Server Data Encryption & Privacy', icon: <Lock size={32} color="var(--color-cyber-blue)"/> },
            { title: 'Real-Time Threat Monitoring & SIEM', icon: <Activity size={32} color="var(--color-electric-purple)"/> },
            { title: 'Server Hardening & Security Audits', icon: <Server size={32} color="var(--color-neon-cyan)"/> },
            { title: 'Vulnerability Assessment', icon: <Shield size={32} color="var(--color-electric-purple)"/> },
            { title: 'Backup & Disaster Recovery', icon: <Globe size={32} color="var(--color-cyber-blue)"/> },
            { title: 'Allied Technical Support', icon: <Users size={32} color="var(--color-electric-purple)"/> },
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">Enterprise-grade protection designed to secure your most valuable digital assets against modern threats.</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Security Process */}
      <section className="process-section container" style={{ marginTop: '6rem' }}>
        <h2 className="section-title">Our <span className="text-gradient">Security Process</span></h2>
        <div className="process-timeline">
          <div className="process-line"></div>
          {[
            { step: '01', title: 'Assessment' },
            { step: '02', title: 'Risk Analysis' },
            { step: '03', title: 'Hardening' },
            { step: '04', title: 'Monitoring' },
            { step: '05', title: 'Response' },
          ].map((item, i) => (
            <div key={i} className="process-step">
              <div className="process-circle">
                {item.step}
              </div>
              <h4 className="process-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section container glass-card">
        <div className="glow-effect cta-glow"></div>
        <h2 className="cta-title">Protect Your Infrastructure Before Threats Strike</h2>
        <p className="cta-desc">Get enterprise-grade security solutions tailored to your infrastructure needs.</p>
        <div className="cta-actions">
          <button className="btn btn-primary">Get Security Consultation</button>
          <button className="btn btn-outline">Schedule Assessment</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
