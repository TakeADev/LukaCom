import styled from 'styled-components'

import { fadeIn, fadeOut, enlarge } from './Animations'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20%;
`

export const IntroText = styled.h1`
  animation: ${fadeIn} 4s ease-in,
    ${(props) => props.makeBig && enlarge} 10s ease-in,
    ${(props) => props.makeBig && fadeOut} 3s ease-in;
`
