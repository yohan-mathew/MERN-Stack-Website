import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Information from './container/Information';
import Services from './container/Services';



const HomePage = () => {
  return <MainLayout>
    <Hero/>
    <Information />
    <Services />
  </MainLayout>
};

export default HomePage;
