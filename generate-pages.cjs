const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const pages = [
  'Home', 'About', 'Services', 'Solutions', 'SOC',
  'Industries', 'Compliance', 'CaseStudies', 'Resources', 'Careers', 'Contact'
];

pages.forEach(page => {
  const content = `import React from 'react';
import { motion } from 'framer-motion';

const ${page} = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      style={{ paddingTop: '120px', minHeight: '80vh' }}
    >
      <h1 className="text-gradient">${page}</h1>
      <p>This is the ${page} page. Work in progress.</p>
    </motion.div>
  );
};

export default ${page};
`;
  const filePath = path.join(pagesDir, `${page}.jsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Pages generated successfully!');
