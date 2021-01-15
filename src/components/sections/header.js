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
    <HeaderWrapper id="top">
      <BackgroundDecider props={iw} />
      <ContentDecider props={iw} />
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
