import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Activity } from 'lucide-react';
import './Home.css';

const CaseStudies = () => {
  const cases = [
    {
      client: 'Global Finance Corp',
      title: 'Zero-Downtime Migration to Secure Cloud',
      icon: <ShieldCheck size={32} color="#8ECCF2" />,
      metrics: [
        { label: 'Uptime Maintained', value: '100%' },
        { label: 'Threats Blocked', value: '1M+' },
        { label: 'Compliance Met', value: 'PCI-DSS' }
      ],
      desc: 'Seamlessly migrated 500+ bare-metal servers to a fully encrypted cloud environment without a single second of operational downtime.'
    },
    {
      client: 'Healthcare Network Inc',
      title: 'Ransomware Prevention & Data Privacy',
      icon: <Activity size={32} color="#FED4AC" />,
      metrics: [
        { label: 'Response Time', value: '< 5 mins' },
        { label: 'Data Breaches', value: '0' },
        { label: 'HIPAA Ready', value: 'Yes' }
      ],
      desc: 'Implemented a robust Zero Trust framework across 50 hospitals, ensuring patient data remains completely secure against sophisticated malware.'
    },
    {
      client: 'E-Commerce Giant',
      title: 'Scaling Infrastructure Under DDoS Fire',
      icon: <TrendingUp size={32} color="#8ECCF2" />,
      metrics: [
        { label: 'Traffic Handled', value: '50 Gbps' },
        { label: 'Latency Drop', value: '-40%' },
        { label: 'ROI', value: '300%' }
      ],
      desc: 'Provided elastic, high-availability architecture to absorb massive DDoS attacks during Black Friday while simultaneously improving site speed.'
    }
  ];

  return (
    <div className="home-page" style={{ paddingTop: '140px', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: '600', color: 'rgb(18, 18, 20)', marginBottom: '1rem' }}
        >
          Case Studies
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'rgb(18, 18, 20)' }}
        >
          Discover how we empower global enterprises to achieve absolute security and uncompromised performance.
        </motion.p>
      </div>

      <section className="container" style={{ marginTop: '2rem', marginBottom: '6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    {study.icon}
                    <span style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#666' }}>{study.client}</span>
                  </div>
                  <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '1rem', color: '#000' }}>{study.title}</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#000', marginBottom: '2rem' }}>{study.desc}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignContent: 'flex-start' }}>
                  {study.metrics.map((metric, j) => (
                    <div key={j} style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', minWidth: '150px' }}>
                      <h4 style={{ fontSize: '24px', fontWeight: '700', color: '#000', marginBottom: '0.5rem' }}>{metric.value}</h4>
                      <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
