import React from 'react'

import { useContext } from 'react'
import { AnimationContext } from '../contexts/AnimationContext'

import LukaComHero from '../assets/LukaComHero.png'
import LukaWithCircle from '../assets/LukaWithCircle.png'

import {
  HeroBackground,
  HeroImage,
  HeroContentContainer,
  HeroText,
} from '../styles/HeroStyles'

import { Navigation, NavElement } from '../styles/NavigationStyles'

function Hero({ toggleNavBar }) {
  const animationContext = useContext(AnimationContext)
  const { animationIteration, setAnimationIteration } = animationContext

  const iterateAnimation = () => setAnimationIteration(animationIteration + 1)

  return (
    <>
      <HeroBackground>
        <img src={LukaComHero} />
      </HeroBackground>
      <HeroImage>
        <img src={LukaWithCircle} />
      </HeroImage>
      <HeroContentContainer>
        {animationIteration >= 4 && (
          <HeroText onAnimationEnd={iterateAnimation}>I am Luka.</HeroText>
        )}
        {animationIteration >= 5 && (
          <HeroText onAnimationEnd={iterateAnimation}>I am a dog.</HeroText>
        )}
        {animationIteration >= 6 && (
          <button
            onAnimationEnd={() => {
              iterateAnimation(), toggleNavBar()
            }}
          >
            LOOK AT ME
          </button>
        )}
      </HeroContentContainer>
    </>
  )
}

export default Hero
