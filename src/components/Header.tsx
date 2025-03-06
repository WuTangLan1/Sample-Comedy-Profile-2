// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ opacity: 0.95 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Logo"
            sx={{ height: { xs: 40, sm: 50 }, mr: 2 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Comedian Name
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" onClick={() => scrollToSection('about')}>
              About
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" onClick={() => scrollToSection('events')}>
              Events
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button color="inherit" onClick={() => scrollToSection('work')}>
              Work
            </Button>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
