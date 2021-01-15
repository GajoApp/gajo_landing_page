import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import kwesforms from "kwesforms"
import Background from "../common/svgs/background"
import BackgroundDecider from "../common/svgs/background_decider"
import ContentDecider from "../common/content_decider"
import GajoLogo from "../common/svgs/gajo_logo"
import "@fontsource/karla"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/product/" } }) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  let gajo_logo
  let iphone_img
  data.allFile.edges.map(edge => console.log(edge))
  data.allFile.edges.map(edge => {
    // console.log(edge.node.relativePath)
    if (edge.node.relativePath === "green-skew.png") {
      iphone_img = edge.node.childImageSharp.fluid
    } else if (edge.node.relativePath === "gajo_logo.png") {
      gajo_logo = edge.node.childImageSharp.fluid
    }
  })

  //   file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
  //     childImageSharp {
  //       fluid(maxWidth: 1000) {
  //         ...GatsbyImageSharpFluid_tracedSVG
  //       }
  //     }
  //   }
  // },
  // file(sourceInstanceName: { eq: "product" }, name: { eq: "gajo-logo" }) {
  //   childImageSharp {
  //     fluid(maxWidth: 1000) {
  //       ...GatsbyImageSharpFluid_tracedSVG
  //     }
  //   }
  // }
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
    let ih = iOS ? window.screen.height : window.innerHeight
    kwesforms.init()
  },[iw])

  return (
    <HeaderWrapper id="top">
      <BackgroundDecider props={iw}/>
      <ContentDecider props={iw}/>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  // background-color: #f8f8f8;
  // padding: 0 0 0 0;
  // z-index: -1;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`