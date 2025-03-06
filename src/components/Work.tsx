// src/components/Work.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const workItems = [
  { year: '2024', title: 'Stand-Up Comedy Show', description: 'An unforgettable night at Club X.' },
  { year: '2023', title: 'Podcast Guest Appearance', description: 'Featured on a top comedy podcast.' },
  { year: '2022', title: 'Comedy Festival Performance', description: 'Headlined at the annual comedy fest.' },
];

const Work: React.FC = () => {
  return (
    <Box
      id="work"
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
          Past Work
        </Typography>
        <Grid container spacing={3}>
          {workItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="subtitle2">{item.year}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Work;
