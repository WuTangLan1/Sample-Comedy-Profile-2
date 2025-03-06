// src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth={false} sx={{ width: '100%', py: { xs: 2, sm: 3, md: 4 }, px: 0 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
