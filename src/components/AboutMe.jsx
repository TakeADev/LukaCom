import React from 'react'

import {
  AboutMeContainer,
  AboutMeImage,
  AboutMeColumn,
  AboutMeText,
} from '../styles/AboutMeStyles'

import LukaCloseUp from '../assets/LukaCloseUp.jpg'

function AboutMe() {
  return (
    <AboutMeContainer>
      <AboutMeColumn>
        <AboutMeImage src={LukaCloseUp} alt='Luka Closeup' />
      </AboutMeColumn>
      <AboutMeColumn>
        <AboutMeText>Hey there! I'm Luka. I'm a dog.</AboutMeText>
      </AboutMeColumn>
    </AboutMeContainer>
  )
}

export default AboutMe
