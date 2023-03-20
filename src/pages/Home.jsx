import React from 'react'

import { useState, useContext } from 'react'

import { AnimationContext } from '../contexts/AnimationContext'

import { HomeContainer } from '../styles/HomeStyles'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

function Home() {
  const animationContext = useContext(AnimationContext)
  const { animationIteration, setAnimationIteration } = animationContext
  const [showNavBar, setShowNavBar] = useState(false)
  const toggleNavBar = () => setShowNavBar(!showNavBar)

  const iterateAnimation = () => setAnimationIteration(animationIteration + 1)

  return (
    <>
      {animationIteration >= 3 && (
        <HomeContainer onAnimationEnd={iterateAnimation}>
          <NavBar showNavBar={showNavBar} />
          <Hero toggleNavBar={toggleNavBar} />
        </HomeContainer>
      )}
    </>
  )
}

export default Home
