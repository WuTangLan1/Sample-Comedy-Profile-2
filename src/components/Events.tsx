// src/components/Events.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const events = [
  { date: '2025-04-15', title: 'Stand-Up Night', location: 'Comedy Club A' },
  { date: '2025-05-10', title: 'Live Podcast', location: 'Event Hall B' },
  { date: '2025-06-20', title: 'Comedy Festival', location: 'Outdoor Arena C' },
];

const Events: React.FC = () => {
  return (
    <Box
      id="events"
      sx={{
        py: 6,
        minHeight: '100vh',
        backgroundColor: 'background.default'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5">{event.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.date} — {event.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Events;
