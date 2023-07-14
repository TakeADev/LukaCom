import styled from 'styled-components'

import { fadeIn } from './Animations'

export const Navigation = styled.div`
  display: flex;
  margin-left: auto;
  width: 35%;
  opacity: ${(props) => (props.showNavBar ? '100%' : '0%')};
  animation: ${(props) => props.showNavBar && fadeIn} 3s ease-out;
`
export const NavElement = styled.a`
  margin-right: 10%;
  margin-top: 1.5%;
  font-size: 1.4rem;
  color: black;

  &:hover {
    color: #3b3b3b;
    cursor: pointer;
  }
`

export const NavButton = styled.button`
  font-size: 1.4rem;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    color: white;
  }
`
