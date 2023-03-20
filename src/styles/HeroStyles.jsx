import styled from 'styled-components'

import { fromLeft } from './Animations'

export const HeroBackground = styled.div`
  width: 100%;
  scale: 1.3;
  margin-top: -10%;
  margin-left: -9%;
  position: absolute;
  z-index: -1;
`

export const HeroImage = styled.div`
  width: 100%;
  margin-left: 3%;
  margin-top: -2%;
  position: absolute;
  z-index: -1;
`
export const HeroContentContainer = styled.div`
  display: flex;
  width: 50%;
  margin-right: auto;
  margin-left: 20%;
  margin-top: 10%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16%;

  button {
    width: 30%;
    margin-top: 3%;
    animation: ${fromLeft} 3s ease-out;
  }
`

export const HeroText = styled.span`
  font-size: 5rem;
  animation: ${fromLeft} 3s ease-out;
`
