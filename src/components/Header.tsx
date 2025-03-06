import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
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
    { id: 'about', label: 'About', icon: <InfoIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} /> },
    { id: 'events', label: 'Events', icon: <EventIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} /> },
    { id: 'work', label: 'Work', icon: <WorkOutlineIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} /> }
  ];

  return (
    <AppBar position="sticky" color="primary" sx={{ opacity: 0.95 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 1, sm: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/images/profile_photos/profile5.png"
            alt="Logo"
            sx={{ height: { xs: 30, sm: 40, md: 50 }, mr: { xs: 1, sm: 2 } }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
            Citizen Kane
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
          {navLinks.map((link) => (
            <motion.div key={link.id} whileHover={{ scale: 1.05 }}>
              <Link
                onClick={() => scrollToSection(link.id)}
                sx={{
                  cursor: 'pointer',
                  color: activeSection === link.id ? 'secondary.main' : 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  padding: { xs: '4px 8px', sm: '6px 12px' },
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  transition: 'all 0.3s ease-in-out',
                  borderBottom: activeSection === link.id ? '2px solid #e91e63' : '2px solid transparent',
                  '&:hover': {
                    color: 'secondary.main',
                    borderBottom: '2px solid #e91e63',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                {link.icon}
                <Box sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                  {link.label}
                </Box>
              </Link>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
