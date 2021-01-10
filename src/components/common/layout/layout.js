import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import "../../../static/fonts/fonts.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
    <svg>
        <clipPath id="wave" clipPathUnits="objectBoundingBox">
          <path class="st0" d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"/>
        </clipPath>
    </svg>
    <svg>
      <clipPath id="corner">
        <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
      </clipPath>
    </svg>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
