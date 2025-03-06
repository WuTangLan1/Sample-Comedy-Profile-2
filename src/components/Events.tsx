// src/components/Events.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Link, Button } from '@mui/material';
import { motion } from 'framer-motion';

const events = [
  {
    date: '2025-04-15',
    title: 'Stand-Up Night',
    location: 'Comedy Club A',
    description: 'An electrifying stand-up night featuring a dynamic lineup and special guest appearances that keep the audience roaring.',
    image: '/images/event_photos/event1.png',
    ticketLink: 'https://tickets.example.com/standup',
    websiteLink: 'https://comedyclubA.com'
  },
  {
    date: '2025-05-10',
    title: 'Live Podcast',
    location: 'Event Hall B',
    description: 'A captivating live podcast that delves into the creative process behind comedy with industry experts.',
    image: '/images/event_photos/event2.png',
    ticketLink: 'https://tickets.example.com/podcast',
    websiteLink: 'https://eventhallB.com'
  },
  {
    date: '2025-06-20',
    title: 'Comedy Festival',
    location: 'Outdoor Arena C',
    description: 'A grand celebration of comedy with multiple performances, interactive sessions, and community vibes under the open sky.',
    image: '/images/event_photos/event3.png',
    ticketLink: 'https://tickets.example.com/festival',
    websiteLink: 'https://arenaC.com'
  }
];

const cardVariants = {
  hover: { scale: 1.03, transition: { duration: 0.3 } }
};

const Events: React.FC = () => {
  return (
    <Box
      id="events"
      sx={{
        py: 8,
        minHeight: '100vh',
        backgroundColor: 'background.default',
        px: { xs: 2, sm: 4, md: 8 }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
          Upcoming Events
        </Typography>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={event.image}
                    alt={event.title}
                    sx={{ height: 240, objectFit: 'cover', filter: 'brightness(0.9)', transition: 'filter 0.3s ease', '&:hover': { filter: 'brightness(1)' } }}
                  />
                  <CardContent sx={{ flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.05)', backdropFilter: 'blur(5px)', p: 2 }}>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      {event.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
                      {event.date} — {event.location}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {event.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Link href={event.ticketLink} target="_blank" rel="noopener" sx={{ fontWeight: 600, color: 'secondary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                        Buy Tickets
                      </Link>
                      <Link href={event.websiteLink} target="_blank" rel="noopener" sx={{ fontWeight: 600, color: 'secondary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                        Visit Website
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '3rem' }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Booking Citizen Kane
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Citizen Kane is excited to hit the stage more often. If you're looking to book him for your upcoming event, please get in touch.
          </Typography>
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
            href="mailto:citizenkane@gmail.com?subject=DO%20NOT%20ACTUALLY%20SEND%20THIS"
          >
            Send Email
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Events;
