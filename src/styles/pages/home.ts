import styled from 'styled-components'

export const ImageContainer = styled.div`
  margin: auto;
  width: 260px;
  margin-bottom: 60px;
`
export const SmallTitle = styled.h1`
  color: ${props => props.theme.colors.light};
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 2rem;

  margin: 12px;
`
export const SmallDescription = styled.h2`
  color: ${props => props.theme.colors.light};
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-weight: 300;
  font-size: 1.3rem;
  margin: 6px;
`
