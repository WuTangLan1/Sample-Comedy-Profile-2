// src/components/About.tsx
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        p: 6,
        minHeight: '100vh',
        backgroundColor: 'background.paper'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box
              component="img"
              src="/images/profile_photos/profile1.png"
              alt="Citizen Kane"
              sx={{
                width: '100%',
                maxHeight: '600px',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h1" gutterBottom>
              Citizen Kane
            </Typography>
            <Typography variant="body1" paragraph>
              Citizen Kane, an emerging comedic voice with a fearless sense of humor, has been honing his craft and steadily earning a reputation for quick-witted roasts. His journey began in intimate local venues, where an unfiltered approach to comedy captured the attention of late-night crowds seeking sharp punchlines and unapologetic honesty.
            </Typography>
            <Typography variant="body1" paragraph>
              Over the last few years, he has leveraged small clubs and spontaneous podcast appearances to refine his style, cultivating a tight-knit following of fans who appreciate his daring performances. With every new stage he steps onto, Citizen Kane elevates his presence, fusing storytelling with an edgy comedic flair that leaves audiences craving more.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
              <Button
                variant="contained"
                sx={{
                  px: '1.5rem',
                  py: '0.8rem',
                  bgcolor: 'transparent',
                  border: '2px solid #e91e63',
                  color: '#ffffff',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: '#ffffff',
                    transform: 'translate(-4px, -4px)',
                    boxShadow: '-8px 8px 0 rgb(167, 37, 37)',
                    borderColor: '#e91e63',
                  },
                }}
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Me Live
                </Button>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '1rem' }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src="/images/profile_photos/profile2.png"
              alt="Citizen Kane 2"
              sx={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: 3
              }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="body1" paragraph>
              In 2024, Citizen Kane embarked on a grassroots tour across intimate stages in various cities. These shows resonated with local audiences, thanks to a blend of raw, relatable humor and boundary-pushing commentary that defines his emerging comedic identity.
            </Typography>
            <Typography variant="body1" paragraph>
              Though he’s only at the dawn of what promises to be a remarkable career, his tenacity and bold comedic vision have already sparked widespread curiosity in stand-up circles. With each city he visits, Citizen Kane continues to sharpen his craft, channeling personal experiences into a performance style both unfiltered and genuine.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              An aspiring master of the roast, Citizen Kane draws inspiration from icons of the scene while forging his own unique path. Night after night, he refines his timing and delivery, aiming to shatter conventions and challenge audiences with every punchline.
            </Typography>
            <Typography variant="body1" paragraph>
              Despite still navigating the earliest chapters of his career, Citizen Kane’s distinctive presence and unwavering dedication foreshadow a future of larger venues, fiercer roasts, and a comedic style set to leave an indelible mark on stand-up comedy.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/images/profile_photos/profile3.png"
              alt="Citizen Kane 3"
              sx={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: 3
              }}
            />
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default About;
