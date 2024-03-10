import React from 'react'
import HeroSection from './Components/HeroSection'


const About = () => {
  const data = {
    name: "Beloved Palestine Cola",
    image: "/src/assets/images/about-pic.jpg"
  };

  return <HeroSection { ... data} />
}

export default About