import React from 'react'

import { useState, useContext } from 'react'

import { AnimationContext } from '../contexts/AnimationContext'

import {
  HomeContainer,
  HeroImage,
  HeroBackground,
  Navigation,
  NavElement,
  HeroText,
  HeroContentContainer,
} from '../styles/HomeStyles'
import LukaComHero from '../assets/LukaComHero.png'
import LukaWithCircle from '../assets/LukaWithCircle.png'

function Home() {
  const animationContext = useContext(AnimationContext)
  const { animationIteration, setAnimationIteration } = animationContext

  const iterateAnimation = () => setAnimationIteration(animationIteration + 1)

  return (
    <>
      {animationIteration >= 3 && (
        <HomeContainer onAnimationEnd={iterateAnimation}>
          <HeroBackground>
            <img src={LukaComHero} />
          </HeroBackground>
          <HeroImage>
            <img src={LukaWithCircle} />
          </HeroImage>
          <Navigation>
            <NavElement>About Me</NavElement>
            <NavElement>Look at Me</NavElement>
          </Navigation>
          <HeroContentContainer>
            {animationIteration >= 4 && (
              <HeroText onAnimationEnd={iterateAnimation}>I am Luka.</HeroText>
            )}
            {animationIteration >= 5 && (
              <HeroText onAnimationEnd={iterateAnimation}>I am a dog.</HeroText>
            )}
            {animationIteration >= 6 && <button>LOOK AT ME</button>}
          </HeroContentContainer>
        </HomeContainer>
      )}
    </>
  )
}

export default Home
