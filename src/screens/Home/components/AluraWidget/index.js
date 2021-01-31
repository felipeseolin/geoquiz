import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../../../../components/Footer';

export default function AluraWidget() {
  return (
    <Footer
      as={motion.footer}
      transition={{ delay: 0.8, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    />
  );
}
