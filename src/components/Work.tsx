import React, { useState, useRef } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const workItems = [
  {
    year: '2024',
    title: 'Stand-Up Comedy Show: The Late Night Laughs',
    description: 'An unforgettable evening at Club X with a diverse lineup of special guests and non-stop laughter.',
    image: '/images/event_photos/event4.png'
  },
  {
    year: '2023',
    title: 'High-Profile Podcast Appearance',
    description: 'Discussed the craft of comedy and life on the road with a renowned host on an exclusive, top-rated show.',
    image: '/images/profile_photos/profile4.png'
  },
  {
    year: '2023',
    title: 'Promotional Teaser',
    description: 'A teaser reel showcasing comedic timing and audience interactions, highlighting crowd reactions.',
    video: '/videos/promovid1.mp4'
  },
  {
    year: '2022',
    title: 'Comedy Festival Finale',
    description: 'Headlined at a major comedy festival, sharing the stage with established comedians before an energetic crowd.',
    image: '/images/event_photos/event5.png'
  },
  {
    year: '2022',
    title: 'Behind The Scenes Profile',
    description: 'Captured candid moments of joke writing, stage prep, and the comedic process leading up to live events.',
    video: '/videos/promovid2.mp4'
  },
  {
    year: '2021',
    title: 'Late Night Radio Guest Spot',
    description: 'Discussed comedic style, upcoming shows, and personal anecdotes in a lively on-air interview.',
    image: '/images/event_photos/event4.png'
  }
];

const cardVariants = {
  hover: { scale: 1.03, transition: { duration: 0.3 } }
};

const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', height: 240 }}>
      <video ref={videoRef} src={src} muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isPlaying ? 'brightness(1)' : 'brightness(0.9)', transition: 'filter 0.3s ease' }} />
      {!isPlaying && (
        <Box onClick={handlePlay} sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <PlayCircleOutlineIcon sx={{ fontSize: { xs: 48, sm: 64, md: 80 }, color: 'white' }} />
        </Box>
      )}
    </Box>
  );
};

const Work: React.FC = () => {
  return (
    <Box
      id="work"
      sx={{
        py: 8,
        minHeight: '100vh',
        backgroundColor: 'background.paper',
        px: { xs: 2, sm: 4, md: 8 }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}>
          Past Work
        </Typography>
        <Grid container spacing={4}>
          {workItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3, overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                  {item.image && (
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={{ height: 240, objectFit: 'cover', filter: 'brightness(0.9)', transition: 'filter 0.3s ease', '&:hover': { filter: 'brightness(1)' } }}
                    />
                  )}
                  {item.video && <VideoPlayer src={item.video} />}
                  <CardContent sx={{ flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.05)', backdropFilter: 'blur(5px)', padding: 2 }}>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
                      {item.year}
                    </Typography>
                    <Typography variant="body2">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Work;
