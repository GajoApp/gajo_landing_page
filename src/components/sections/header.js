import React, { useEffect, useState } from "react"
import styled from "styled-components"
import kwesforms from "kwesforms"
import BackgroundDecider from "../common/svgs/background_decider"
import ContentDecider from "../common/content_decider"

const Header = () => {
  let [iw, setIw] = useState(null)
  useEffect(() => {
    if (window.location.hostname === "localhost") {
      console.log("I'm on localhost")
    }
    console.log(window.navigator.userAgent)
    let iOS =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
    iw = iOS ? window.screen.width : window.innerWidth
    setIw(iw)
    console.log(iw)
    kwesforms.init()
  }, [iw])

  return (
    <Container id="top">
      <BackgroundDecider props={iw} />
      <ContentDecider props={iw} />
    </Container>
  )
}

export default Header

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: ${props => props.theme.screen.xlg}) {
    max-width: 1500px;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`
