// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        p: 3,
        textAlign: 'center',
        mt: 4
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        Follow the Comedian on Social Media
      </Typography>
      <Box>
        <IconButton
          component={Link}
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'white' }}
        >
          <FacebookIcon />
        </IconButton>
      </Box>
      <Typography variant="caption" display="block" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Comedian Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
