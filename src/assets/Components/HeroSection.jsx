import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Style/Button';

const HeroSection = ({name, image}) => {
  return <Wrapper>
<div className='container grid grid-two-column'>
    <div className="section-hero-data">
     <h1 className='hero-heading'>{name}</h1>
     <p className='hero-para'>Palastine Will Free</p>
     <Button className='btn Connect-btn'>
        <NavLink to='/contact'> Connect Now</NavLink>
    </Button>
    </div>
    
    <div className="section-hero-image">
     <picture>
        <img src={image} className='hero-img'/>
     </picture>
    </div>
</div>


  </Wrapper>;
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem

  }

  .btn {
    max-width: 16rem;
  }

  .hero-heading{
    text-transform: uppercase;
    font-size: 5.4rem;
  }

  .hero-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width:  60rem;
    font-size: 2.4rem;
    font-weight: 700;

  }

  .section-hero-image{
     display: flex;
     justify-content: center;
     align-items: center;
  }

  picture{
    text-align: center;
  }

  .hero-img{
    max-width: 90%;
    border: black 4px solid;
  }
`;

export default HeroSection