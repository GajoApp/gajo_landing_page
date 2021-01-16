import React from "react"
import styled from "styled-components"
import SmallBackground from "./mobile/mobile"
import Background from "./desktop/desktop"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import kwesforms from "kwesforms"
import { Container } from "../global"
import Desktop from "./desktop/desktop"
import Mobile from "./mobile/mobile"
import GajoLogo from "../common/svgs/gajo_logo"
import "@fontsource/karla"

export default function ContentDecider(props) {
    let small = 1100
    console.log("Printing props: ", props.props)
    if (props.props > small) {
      console.log("Inside Desktop",props)
      return <Desktop/> 
    } else {
      console.log("Inside Mobile",props)
      return <Mobile />
    }
}