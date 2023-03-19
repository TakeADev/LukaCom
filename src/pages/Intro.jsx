import React from 'react'

import { useState, useContext } from 'react'

import { IntroContainer, IntroText } from '../styles/IntroStyles'
import { PageDisplayedContext } from '../contexts/PageDisplayedContext'

function Intro() {
  const [counter, setCounter] = useState(0)
  const [introIsPlaying, setIntroIsPlaying] = useState(true)
  const [makeBig, setMakeBig] = useState(false)

  const pageDisplayedContext = useContext(PageDisplayedContext)
  const { pageDisplayed, setPageDisplayed } = pageDisplayedContext

  const increaseCounter = () => setCounter(counter + 1)
  const iteratePage = () => setPageDisplayed(pageDisplayed + 1)

  return (
    <>
      {introIsPlaying && (
        <IntroContainer>
          {counter === 0 && (
            <IntroText onAnimationEnd={increaseCounter}>Hello...</IntroText>
          )}
          {counter === 1 && (
            <IntroText onAnimationEnd={increaseCounter}>
              My name is Luka...
            </IntroText>
          )}
          {counter === 2 && (
            <IntroText
              makeBig={makeBig}
              onAnimationEnd={() => {
                setMakeBig(true)
                setTimeout(iteratePage, 3000)
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
