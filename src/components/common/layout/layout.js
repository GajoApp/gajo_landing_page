import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import "../../../static/fonts/fonts.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {/* <CornerCurve /> */}
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
    <svg>
      <clipPath id="curveFigma">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1054.59 1161.55L1045.35 1133.07C1036.11 1104.6 1017.63 1047.64 951.316 1006.21C884.998 964.779 770.838 938.868 718.188 893.002C665.539 847.136 674.4 781.314 649.088 726.578C623.777 671.843 564.293 628.194 545.816 571.241C527.339 514.288 549.869 444.032 565.565 375.992C581.261 307.953 590.122 242.131 551.141 191.83C512.161 141.529 425.339 106.75 427.365 43.1449C429.392 -20.4597 520.267 -112.889 565.705 -159.104L611.143 -205.318L-5.36442e-05 -7.04848L9.2384 21.4279C18.4769 49.9043 36.9538 106.857 55.4307 163.81C73.9076 220.763 92.3845 277.715 110.861 334.668C129.338 391.621 147.815 448.574 166.292 505.527C184.769 562.479 203.246 619.432 221.723 676.385C240.2 733.338 258.677 790.29 277.154 847.243C295.631 904.196 314.107 961.149 332.584 1018.1C351.061 1075.05 369.538 1132.01 388.015 1188.96C406.492 1245.91 424.969 1302.87 434.207 1331.34L443.446 1359.82L1054.59 1161.55Z" fill="white"/>
      </clipPath>
    </svg>
    <svg width="1437" height="643" viewBox="0 0 1437 643" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1437 0H1407.06C1377.12 0 1317.25 0 1257.38 50.2963C1197.5 100.593 1137.62 201.185 1077.75 237.111C1017.88 273.037 958 244.296 898.125 251.481C838.25 258.667 778.375 301.778 718.5 301.778C658.625 301.778 598.75 258.667 538.875 222.741C479 186.815 419.125 158.074 359.25 179.63C299.375 201.185 239.5 273.037 179.625 251.481C119.75 229.926 59.875 114.963 29.9375 57.4815L0 0V642.5H29.9375C59.875 642.5 119.75 642.5 179.625 642.5C239.5 642.5 299.375 642.5 359.25 642.5C419.125 642.5 479 642.5 538.875 642.5C598.75 642.5 658.625 642.5 718.5 642.5C778.375 642.5 838.25 642.5 898.125 642.5C958 642.5 1017.88 642.5 1077.75 642.5C1137.62 642.5 1197.5 642.5 1257.38 642.5C1317.25 642.5 1377.12 642.5 1407.06 642.5H1437V0Z" fill="url(#paint0_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="718.5" y1="2.5129e-05" x2="341.5" y2="643" gradientUnits="userSpaceOnUse">
          <stop offset="0.151042" stop-color="#2ADD9C" stop-opacity="0"/>
          <stop offset="0.729167" stop-color="#29E19E"/>
        </linearGradient>
      </defs>
    </svg>




  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const CornerCurve = styled.div`
z-index: 2;
background: red;
position: absolute;
height: 90%;
width: 90%;
clip-path: url(#curveFigma);
`