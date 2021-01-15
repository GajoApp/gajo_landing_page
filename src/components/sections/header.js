import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import kwesforms from "kwesforms"
import { Container } from "../global"
import Background from "../common/svgs/background"
import BackgroundDecider from "../common/svgs/background_decider"
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

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      console.log("I'm on localhost")
    }
    kwesforms.init()
  })

  return (
    <HeaderWrapper id="top">
      <BackgroundS />
      <Container>
        <Flex>
          <HeaderTextGroup>
            <ImageWrapper>
              <GajoLogo />
              <br />
            </ImageWrapper>
            <h1>
              Exploring careers
              <br />
              shouldn't be
              <br />
              boring.
            </h1>
            <p>
              Sign up today to stay in touch and see when we launch! 🚀 We
              promise we won’t spam.
            </p>
            <HeaderForm
              className="kwes-form"
              action="https://kwes.io/api/foreign/forms/sWHosqzNcJWrSLP8Zilf"
            >
              <FormConatiner>
                <InputsContainer>
                  <FirstNameDiv>
                    <Label for="name">First Name</Label>
                    <HeaderInput
                      name="name"
                      placeholder="Name"
                      rules="alpha|max:25"
                    />
                  </FirstNameDiv>
                  <div>
                    <Label for="phone">Phone Number</Label>
                    <HeaderInput
                      name="phone"
                      placeholder="(123) 456-7890"
                      rules="required|regex:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                    />
                  </div>
                </InputsContainer>
                <SubmitContainer>
                  <HeaderButton type="submit">Get Updates</HeaderButton>
                </SubmitContainer>
              </FormConatiner>
            </HeaderForm>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={iphone_img} />
          </ImageWrapper>
        </Flex>
      </Container>
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

const HeaderTextGroup = styled.div`
  margin: 0;

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
    font-weight: 700;
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
    color: black;
  }

  p {
    margin-bottom: 38px;
    color: black;
    font-family: Karla;
    font-style: normal;
    font-weight: 400;
  }
`

const BackgroundS = styled(BackgroundDecider)``

const Flex = styled.div`
  display: grid;
  grid-gap: 30%;
  padding-top: 5%;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 40% 60% 10% 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const FirstNameDiv = styled.div`
  padding-right: 10%;
`
const Label = styled.div`
  color: black;
`

const FormConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: ;
`
const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
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

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: grey;
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 37px;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  border-image: initial;
  border-radius: 10px;
  padding: 4px 8px;
  outline: 0px;
  ::placeholder {
    color: grey;
    opacity: 0.3;
  }
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
  font-size: 24px;
  font-family: Karla;
  color: white;
  line-height: 28px;
  letter-spacing: 1px;
  height: 54px;
  width: 100%;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 5px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  transform: translate(-19px, 5px);
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
  width: 800px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 400px;
    position: fixed;
    top: 25%;
  }
`

const StyledImage1 = styled(GajoLogo)`
  width: 250px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 150px;
  }
`
