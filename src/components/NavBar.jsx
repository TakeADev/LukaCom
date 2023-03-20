import React from 'react'

import { useContext } from 'react'
import { AnimationContext } from '../contexts/AnimationContext'

import { Navigation, NavElement, NavButton } from '../styles/NavigationStyles'

function NavBar({ showNavBar }) {
  const animationContext = useContext(AnimationContext)
  const { animationIteration, setAnimationIteration } = animationContext
  return (
    <>
      <Navigation showNavBar={showNavBar}>
        <>
          <NavElement>About Me</NavElement>
          <NavElement>About the Owner</NavElement>
          <NavButton>Look at Me</NavButton>
        </>
      </Navigation>
    </>
  )
}

export default NavBar
