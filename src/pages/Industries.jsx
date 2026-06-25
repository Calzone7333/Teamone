import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      style={{ paddingTop: '120px', minHeight: '80vh' }}
    >
      <h1 className="text-gradient">Industries</h1>
      <p>This is the Industries page. Work in progress.</p>
    </motion.div>
  );
};

export default Industries;
