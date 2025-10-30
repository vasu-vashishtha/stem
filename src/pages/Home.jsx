import React from 'react'
import HeroSection from '../components/HeroSection';
import Conference from '../components/Conference';
import Theme from '../components/Theme';
import Abstract from '../components/Abstract';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Conference/>
      <Theme/>
      <Abstract/>
    </>
  )
}

export default Home;