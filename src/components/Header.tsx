// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const sectionIds = ['about', 'events', 'work'];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection;
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionIds]);

  const navLinks = [
    { id: 'about', label: 'About', icon: <InfoIcon /> },
    { id: 'events', label: 'Events', icon: <EventIcon /> },
    { id: 'work', label: 'Work', icon: <WorkOutlineIcon /> }
  ];

  return (
    <AppBar position="sticky" color="primary" sx={{ opacity: 0.95 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/images/profile_photos/profile5.png"
            alt="Logo"
            sx={{ height: { xs: 40, sm: 50 }, mr: 2 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Comedian Name
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navLinks.map((link) => (
            <motion.div key={link.id} whileHover={{ scale: 1.1 }}>
              <Button
                color="inherit"
                onClick={() => scrollToSection(link.id)}
                sx={{
                  borderBottom: activeSection === link.id ? '2px solid #e91e63' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                {link.icon}
                <Box sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                  {link.label}
                </Box>
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
