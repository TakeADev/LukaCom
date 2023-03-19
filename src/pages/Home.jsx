import React from 'react'
import {
  HomeContainer,
  HeroCard,
  HeroContainer,
  HeroImage,
} from '../styles/HomeStyles'
import image from '../assets/20230223_155743.jpg'

function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroImage>
          <img src={image} />
        </HeroImage>
        <HeroCard>test2</HeroCard>
      </HeroContainer>
    </HomeContainer>
  )
}

export default Home
