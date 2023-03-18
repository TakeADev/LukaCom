import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
	opacity: 0%;
}
to {
	opacity: 100%
}
`
const enlarge = keyframes`
	from {
	transform: scale(1);
}
to {
	transform: scale(100);
}
`

export const IntroContainer = styled.div``

export const IntroText = styled.h1`
  animation: ${fadeIn} 4s ease-in,
    ${(props) => props.makeBig && enlarge} 10s ease-in;
`
