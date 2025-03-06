import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'grey.900', p: 4, mt: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, gap: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link href="https://twitter.com/Citizen_Kane" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', position: 'relative', '&:hover': { color: 'secondary.main' }, '&::after': { content: '""', position: 'absolute', bottom: -2, left: '50%', width: '100%', height: '2px', backgroundColor: 'secondary.main', transform: 'translateX(-50%) scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease-in-out' }, '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' } }}>
            <IconButton sx={{ color: 'inherit' }}>
              <TwitterIcon />
            </IconButton>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Citizen_Kane</Typography>
          </Link>
          <Link href="https://instagram.com/TheCitizenKane" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', position: 'relative', '&:hover': { color: 'secondary.main' }, '&::after': { content: '""', position: 'absolute', bottom: -2, left: '50%', width: '100%', height: '2px', backgroundColor: 'secondary.main', transform: 'translateX(-50%) scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease-in-out' }, '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' } }}>
            <IconButton sx={{ color: 'inherit' }}>
              <InstagramIcon />
            </IconButton>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>TheCitizenKane</Typography>
          </Link>
          <Link href="https://facebook.com/CitizenKaneOfficial" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', position: 'relative', '&:hover': { color: 'secondary.main' }, '&::after': { content: '""', position: 'absolute', bottom: -2, left: '50%', width: '100%', height: '2px', backgroundColor: 'secondary.main', transform: 'translateX(-50%) scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease-in-out' }, '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' } }}>
            <IconButton sx={{ color: 'inherit' }}>
              <FacebookIcon />
            </IconButton>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>CitizenKaneOfficial</Typography>
          </Link>
          <Link href="https://youtube.com/CitizenKaneComedy" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none', position: 'relative', '&:hover': { color: 'secondary.main' }, '&::after': { content: '""', position: 'absolute', bottom: -2, left: '50%', width: '100%', height: '2px', backgroundColor: 'secondary.main', transform: 'translateX(-50%) scaleX(0)', transformOrigin: 'center', transition: 'transform 0.3s ease-in-out' }, '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' } }}>
            <IconButton sx={{ color: 'inherit' }}>
              <YouTubeIcon />
            </IconButton>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>CitizenKaneComedy</Typography>
          </Link>
        </Box>
        <Typography variant="caption" sx={{ color: 'grey.500' }}>
          © {new Date().getFullYear()} CitizenKane. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
