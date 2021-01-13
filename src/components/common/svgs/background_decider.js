import React from "react"
import SmallBackground from "./mobile_background"
import Background from "./background"
import { useEffect, useRef } from "react"

export default function BackgroundDecider() {
  let iw = useRef(null)

  let small = 767
  useEffect(() => {
    
    let iOS =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
    iw.current = iOS ? window.screen.width : window.innerWidth
    let ih = iOS ? window.screen.height : window.innerHeight
  })
  console.log("iw: " + iw.current)

  // let screen = {
  //   xs: "575",
  //   sm: "767",
  //   md: "991",
  //   lg: "1199",
  // }

  if (iw.current > small) {
    return <Background />
  } else {
    return <SmallBackground />
  }
}
