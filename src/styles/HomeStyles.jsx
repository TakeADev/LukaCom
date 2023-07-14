import styled from 'styled-components'

import { fadeIn } from './Animations'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 3s ease-in;
`
export const GalleryButton = styled.button`
  width: 70%;
  align-self: center;
  margin-bottom: 5%;
`
