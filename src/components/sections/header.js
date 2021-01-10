import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import kwesforms from "kwesforms"
import { Container } from "../global"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {absolutePath: {regex: "/product/"}}) {
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
  let gajo_logo;
  let iphone_img;
  data.allFile.edges.map((edge) => console.log(edge));
  data.allFile.edges.map((edge) => {
    console.log(edge.node.relativePath);
    if (edge.node.relativePath === "green-skew.png") {
      iphone_img = edge.node.childImageSharp.fluid;
    } else if (edge.node.relativePath === "gajo_logo.png") {
      gajo_logo = edge.node.childImageSharp.fluid;
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

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      console.log("I'm on localhost")
    } 
    kwesforms.init();
  })

  return (
    <HeaderWrapper id="top">
      <CurvyBackground/>
      <CurvyBackground2/>
      <CurvyBackground3/>
      <CurvyBackground4/>
      <CornerCurve/>
      <Container>
        <Flex>
          <HeaderTextGroup>
          
          <ImageWrapper>
            <StyledImage1 fluid={gajo_logo} />
            <br />
          </ImageWrapper>
            <h1>
              Exploring careers
              <br />
              shouldn't be
              <br />
              boring.
            </h1>
            <h2>
              Sign up today to stay in touch and see when we launch! 🚀 We
              promise we won’t spam.
            </h2>
            <HeaderForm
              className="kwes-form"
              action="https://kwes.io/api/foreign/forms/sWHosqzNcJWrSLP8Zilf"
            >
              {/* <label> First Name</label>
              <label> Phone Number</label>
              <br /> */}
              <FormConatiner> 
                <InputsContainer>
                  <div>
                    <label for="name">Your First Name</label>
                    <HeaderInput name="name" placeholder="Your first name" rules="alpha|max:25" />
                  </div>
                  <div>
                    <label for="phone">Your Phone Number</label>
                    <HeaderInput name="phone" placeholder="Your phone number" rules="required|regex:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" />
                  </div>
                </InputsContainer>
                <SubmitContainer> 
                  <HeaderButton type="submit">Get Updates</HeaderButton>
                </SubmitContainer>
              </FormConatiner>
              {/* <label for="name">Your First Name</label>
              <HeaderInput name="name" placeholder="Your first name" rules="alpha|max:25" />
              <label for="phone">Your Phone Number</label>
              <HeaderInput name="phone" placeholder="Your phone number" rules="required|regex:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" />
              <HeaderButton type="submit">Get Updates</HeaderButton> */}
            </HeaderForm>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={iphone_img} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
    
  )
}

export default Header

const CornerCurve = styled.div`
z-index: -1;
// background: red;
// position: absolute;
height: 10%;
width: 10%;
clip-path: url(#corner);
`

const CurvyBackground = styled.div`
// margin-top: -100px;
z-index: -1;
transform-origin: right bottom; /* or 100% 100%, same thing */
transform:
  rotate(65deg)
  translate(6%, 120%); /* go from bottom right to top right */

background: white;
position: absolute;
height: 70%;
width: 70%;
clip-path: url(#wave);
`

const CurvyBackground2 = styled.div`
// margin-top: -100px;
z-index: -1;
transform-origin: right bottom; /* or 100% 100%, same thing */
transform:
  rotate(-120deg)
  translate(4%, 10%); /* go from bottom right to top right */

background: white;
position: absolute;
height: 30%;
width: 20%;
clip-path: url(#wave);
`

const CurvyBackground3 = styled.div`
// margin-top: -100px;
z-index: -1;
transform-origin: right bottom; /* or 100% 100%, same thing */
transform:
  rotate(-120deg)
  translate(88%, 28.2%); /* go from bottom right to top right */

background: white;
position: absolute;
height: 30%;
width: 15%;
clip-path: url(#wave);
`

const CurvyBackground4 = styled.div`
// margin-top: -100px;
z-index: -1;
transform-origin: right bottom; /* or 100% 100%, same thing */
transform:
  rotate(90deg)
  translate(-20%, 200%); /* go from bottom right to top right */

background: white;
position: absolute;
height: 30%;
width: 30%;
clip-path: url(#wave);
`

const HeaderWrapper = styled.header`
  background-color: #3c896d;
  z-index: 2;
  padding: 160px 0 80px 0;
  // position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;
  z-index: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
    font-family: Karla;
    font-style: normal;
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
    color: black;
  }

  p {
    margin-bottom: 48px;
    color: black;
  }
`

const Flex = styled.div`
  display: grid;
  // z-index: 4;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const FormConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 10px;
`
const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  width: 100%;
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const StyledImage1 = styled(Img)`
  width: 250px;
  margin-bottom: 55px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 150px;

    
  }
`
