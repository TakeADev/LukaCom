import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
`

export const HeroCard = styled.div`
  width: 50%;
`

export const HeroImage = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    object-position: 50px;
  }
`
