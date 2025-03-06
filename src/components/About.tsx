// src/components/About.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 6,
        minHeight: '100vh',
        backgroundColor: 'background.paper'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          This is a sample bio for an emerging comedian. With a unique sense of humor and a passion for
          storytelling, this artist brings a fresh and engaging perspective to every performance. Their shows
          are known for being electrifying and unforgettable.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default About;
