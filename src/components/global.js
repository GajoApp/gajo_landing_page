import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 5%;
  padding: 0 16px;
  // @media (min-width: ${props => props.theme.screen.xlg}) {
  //   max-width: 1200px;
  // }

  @media (max-width: ${props => props.theme.screen.lg}) {
    margin: 0 5%;
    padding: 0 16px;
    max-width: 1200px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    margin: 0;
    padding: 0 10%;
    max-width: 960px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 0;
    padding: 0 10%;
    max-width: 720px;
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    margin: 0;
    padding: 0 10%;
    max-width: 540px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`
