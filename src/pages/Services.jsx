import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Lock, Activity, Users, Globe } from 'lucide-react';
import './Home.css';

const Services = () => {
  const services = [
    { title: 'Server Data Encryption & Privacy', icon: <Lock size={40} color="#8ECCF2"/>, desc: 'Advanced AES-256 encryption protocols safeguarding your data at rest and in transit.' },
    { title: 'Real-Time Threat Monitoring', icon: <Activity size={40} color="#FED4AC"/>, desc: '24/7 SIEM solutions providing absolute visibility and instant alerting for anomalies.' },
    { title: 'Server Hardening & Audits', icon: <Server size={40} color="#8ECCF2"/>, desc: 'Rigorous CIS-benchmarked hardening and recurring penetration tests.' },
    { title: 'Vulnerability Assessment', icon: <Shield size={40} color="#FED4AC"/>, desc: 'Proactive scanning and patching to eliminate attack vectors before they are exploited.' },
    { title: 'Backup & Disaster Recovery', icon: <Globe size={40} color="#8ECCF2"/>, desc: 'Automated, off-site immutable backups ensuring business continuity.' },
    { title: 'Allied Technical Support', icon: <Users size={40} color="#FED4AC"/>, desc: 'Dedicated engineering teams available 24/7 to resolve critical infrastructure issues.' }
  ];

  return (
    <div className="home-page" style={{ paddingTop: '140px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: '600', color: 'rgb(18, 18, 20)', marginBottom: '1rem' }}
        >
          Core Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'rgb(18, 18, 20)' }}
        >
          Enterprise-grade cybersecurity frameworks designed to protect, monitor, and empower your digital infrastructure.
        </motion.p>
      </div>

      <section className="services-section container" style={{ marginTop: '2rem', marginBottom: '6rem' }}>
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card service-card"
              style={{ textAlign: 'left', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>{service.title}</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#000' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="cta-section container glass-card" style={{ marginBottom: '6rem', background: '#f8f9fa', border: '1px solid rgba(0,0,0,0.05)' }}>
        <h2 className="cta-title" style={{ color: '#000' }}>Ready to Secure Your Infrastructure?</h2>
        <p className="cta-desc" style={{ color: '#000' }}>Get enterprise-grade security solutions tailored to your specific needs.</p>
        <div className="cta-actions">
          <button className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #8ECCF2, #FED4AC)', color: '#000', border: 'none', fontWeight: '700' }}>Get Security Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
