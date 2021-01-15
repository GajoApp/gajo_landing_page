import React from "react"
import SmallBackground from "./mobile_background"
import Background from "./background"
import { useEffect, useRef } from "react"

export default function BackgroundDecider(props) {
  let iw = useRef(null)

  let small = 767
  // useEffect(() => {
  //   console.log(window.navigator.userAgent)
  //   let iOS =
  //     /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
  //   iw.current = iOS ? window.screen.width : window.innerWidth
  //   console.log(iw)
  //   let ih = iOS ? window.screen.height : window.innerHeight
  // },[iw])

  // let screen = {
  //   xs: "575",
  //   sm: "767",
  //   md: "991",
  //   lg: "1199",
  // }
  console.log("Printing props: ", props.props)
  if (props.props > 400) {
    console.log("Inside Desktop",props)
    return <Background />
  } else {
    console.log("Inside Mobile",props)
    return <SmallBackground />
  }
}
