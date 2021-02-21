import styled from 'styled-components'

export const Main = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: ${props =>
    `linear-gradient(0deg, ${props.theme.colors.backgrounds.primary}, ${props.theme.colors.backgrounds.secondary})`};

  ::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: 0;
    right: 0;
    border-bottom: 60px solid
      ${props => props.theme.colors.backgrounds.redLight};
    border-left: 60px solid transparent;
  }
`
