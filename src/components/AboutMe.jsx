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
        <AboutMeText>
          <h2>About Me</h2>
          <p>
            Hey there! I'm Luka. I'm a dog. People always say, "Hey, Luka! Why
            do you look so weird?" and to that I say, "my parents hated me!" I'm
            a dachshund, corgi, and jack russel mix. That's why I looks so
            derpy!
          </p>
          <p>
            I have a ton of fun interests and hobbies. Let me list some for you:
          </p>
          <ul>
            <li>Sleeping</li>
            <li>Eating</li>
            <li>Running after toys and not bringing them back.</li>
            <li>Digging in blankets and pretending I'm getting somewhere.</li>
            <li>Licking the heads of bald people.</li>
            <li>Snuggling.</li>
          </ul>
        </AboutMeText>
      </AboutMeColumn>
    </AboutMeContainer>
  )
}

export default AboutMe
