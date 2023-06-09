import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Information from './container/Information';
import Services from './container/Services';
import CTA from './container/CTA';



const HomePage = () => {
  return <MainLayout>
    <Hero/>
    <Information />
    <CTA />
    <Services />
    <CTA />
  </MainLayout>
};

export default HomePage;
