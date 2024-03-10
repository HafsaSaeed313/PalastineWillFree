import React from 'react'
import HeroSection from './Components/HeroSection'


const Home = () => {
   const data = {
    name: "Palastine Cola",
    image: "/src/assets/images/Home-pic.webp"
   }
  
  return  <HeroSection { ... data}/>;
 
  
}

export default Home