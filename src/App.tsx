// src/App.tsx
import React from 'react';
import Layout from './components/Layout';
import About from './components/About';
import Events from './components/Events';
import Work from './components/Work';

const App: React.FC = () => {
  return (
    <Layout>
      <About />
      <Events />
      <Work />
    </Layout>
  );
};

export default App;
