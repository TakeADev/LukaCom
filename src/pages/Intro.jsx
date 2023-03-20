import React from 'react'

import { useState, useContext } from 'react'

import { IntroContainer, IntroText } from '../styles/IntroStyles'
import { AnimationContext } from '../contexts/AnimationContext'

function Intro() {
  const [makeBig, setMakeBig] = useState(false)

  const animationContext = useContext(AnimationContext)
  const { animationIteration, setAnimationIteration } = animationContext

  const iterateAnimation = () => setAnimationIteration(animationIteration + 1)

  return (
    <>
      {animationIteration < 3 && (
        <IntroContainer>
          {animationIteration === 0 && (
            <IntroText onAnimationEnd={iterateAnimation}>Hello...</IntroText>
          )}
          {animationIteration === 1 && (
            <IntroText onAnimationEnd={iterateAnimation}>
              My name is Luka...
            </IntroText>
          )}
          {animationIteration === 2 && (
            <IntroText
              makeBig={makeBig}
              onAnimationEnd={() => {
                setMakeBig(true)
                setTimeout(iterateAnimation, 3000)
              }}
            >
              I am a dog...
            </IntroText>
          )}
        </IntroContainer>
      )}
    </>
  )
}

export default Intro
