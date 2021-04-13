import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import kwesforms from "kwesforms"
import GajoLogoMobile from "../svgs/gajo_logo_mobile"
import "@fontsource/karla"
import {
  ImageWrapperPhone,
  StyledImage1,
  StyledImage,
  ImageWrapper,
  HeaderButton,
  HeaderInput,
  HeaderForm,
  SubmitContainer,
  InputsContainer,
  FormConatiner,
  Label,
  FirstNameDiv,
  Flex,
  HeaderTextGroup,
} from "../../../styles/gajoStyles"
import { Container } from "../../global"

export default function Mobile(props) {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "product" }
        name: { eq: "MockUp_NoShadow_New" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  let iphone_img = data.file.childImageSharp.fluid
  useEffect(() => {
    window.analytics.track("User Load Mobile", {
      user: "VisitedMobile"
    });
  })
  const signedUP = () => {
    window.analytics.track("User Submit Mobile", {
      user: "SignedUpMobile"
    });
  }

  return (
    <Container>
      <Flex>
        <ImageWrapper>
          <GajoLogoMobile />
          <br />
        </ImageWrapper>
        <HeaderTextGroup>
          <h1>
            Exploring careers
            <br />
            shouldn't be
            <br />
            boring.
          </h1>
        </HeaderTextGroup>
        <ImageWrapperPhone>
          {/* <ImageWrapper>  */}
          <StyledImage fluid={iphone_img} />
          {/* </ImageWrapper> */}
        </ImageWrapperPhone>
        <HeaderTextGroup>
          <p>
            Sign up today to stay in touch and see
            <br />
            when we launch! 🚀 We promise we
            <br />
            won’t spam.
          </p>
          <HeaderForm
            className="kwes-form"
            action="https://kwes.io/api/foreign/forms/kPeK9BTCz6WeeNnEtSIT"
          >
            <FormConatiner>
              <InputsContainer>
                <FirstNameDiv>
                  <Label for="name">First Name</Label>
                  <HeaderInput
                    name="name"
                    placeholder="Name"
                    // rules="alpha|max:25"
                  />
                </FirstNameDiv>
                <div>
                  <Label for="phone">Phone Number</Label>
                  <HeaderInput
                    name="phone"
                    placeholder="(123) 456-7890"
                    // rules="required|regex:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
                  />
                </div>
              </InputsContainer>
              <SubmitContainer>
                <HeaderButton type="submit" onClick={()=>signedUP()}>Get Updates</HeaderButton>
              </SubmitContainer>
            </FormConatiner>
          </HeaderForm>
        </HeaderTextGroup>
      </Flex>
    </Container>
  )
}

// const HeaderTextGroup = styled.div`
//   margin: 0;
//   padding-left: 5%;

//   > div {
//     width: 120%;
//     margin-bottom: -4.5%;

//     @media (max-width: ${props => props.theme.screen.md}) {
//       margin: 0 0px;
//     }
//   }

//   h1 {
//     margin: 0 0 24px;
//     color: ${props => props.theme.color.primary};
//     font-family: Karla;
//     font-style: normal;
//     font-weight: 700;
//   }

//   h2 {
//     margin-bottom: 24px;
//     ${props => props.theme.font_size.regular}
//     color: black;
//   }

//   p {
//     margin-top: 20%;
//     margin-bottom: 38px;
//     color: black;
//     font-family: Karla;
//     font-style: normal;
//     font-weight: 400;
//   }
// `

// const BackgroundS = styled(BackgroundDecider)``

// const Flex = styled.div`
//   display: grid;
//   grid-gap: 30%;
//   padding-top: 5%;
//   justify-content: space-between;
//   align-content: center;
//   grid-template-columns: 40% 60% 10% 1fr 1fr;
//   @media (max-width: ${props => props.theme.screen.md}) {
//     grid-template-columns: 1fr;
//     grid-gap: 64px;
//   }
// `

// const FirstNameDiv = styled.div`
//   padding-right: 10%;
// `
// const Label = styled.div`
//   color: black;
//   font-family: Karla;
// `

// const FormConatiner = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
//   width: ;
// `
// const InputsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `
// const SubmitContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: 10px;
//   width: 100%;
// `

// const HeaderForm = styled.form`
//   display: flex;
//   flex-direction: row;
//   padding-bottom: 16px;

//   @media (max-width: ${props => props.theme.screen.sm}) {
//     flex-direction: column;
//   }
// `

// const HeaderInput = styled.input`
//   font-weight: 500;
//   font-size: 16px;
//   color: grey;
//   line-height: 42px;
//   width: 100%;
//   text-align: left;
//   height: 37px;
//   border-width: 1px;
//   border-style: solid;
//   border-color: grey;
//   border-image: initial;
//   border-radius: 10px;
//   padding: 4px 8px;
//   outline: 0px;
//   ::placeholder {
//     color: grey;
//     opacity: 0.3;
//   }
//   &:focus {
//     box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
//   }
//   @media (max-width: ${props => props.theme.screen.md}) {
//     margin-bottom: 8px;
//   }
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     display: block;
//     width: 100%;
//   }
// `

// const HeaderButton = styled.button`
//   font-weight: 500;
//   font-size: 24px;
//   font-family: Karla;
//   color: white;
//   line-height: 28px;
//   letter-spacing: 1px;
//   height: 54px;
//   width: 100%;
//   display: block;
//   margin-left: 8px;
//   text-transform: uppercase;
//   cursor: pointer;
//   white-space: nowrap;
//   background: ${props => props.theme.color.secondary};
//   border-radius: 5px;
//   padding: 0px 40px;
//   border-width: 0px;
//   border-style: initial;
//   transform: translate(-19px, 5px);
//   border-color: initial;
//   border-image: initial;
//   outline: 0px;
//   &:hover {
//     box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
//   }
//   @media (max-width: ${props => props.theme.screen.md}) {
//   }
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     margin-left: 0;
//   }
// `
// const ImageWrapper = styled.div`
//   justify-self: end;
//   align-self: center;
//   @media (max-width: ${props => props.theme.screen.md}) {
//     justify-self: center;
//   }
// `

// const ImageWrapperPhone = styled.div`
//     padding-bottom: 40%
// //   justify-self: end;
// //   align-self: center;
// //   @media (max-width: ${props => props.theme.screen.md}) {
// //     justify-self: center;
// //   }
// `

// const StyledImage = styled(Img)`
//   @media (max-width: 1848px) {
//     position: fixed;
//     right: 700px;
//     width: 800px;
//   }
//   @media (max-width: 1199px) {
//     width: 600px;
//   }
//   @media (max-width: 991px) {
//     width: 400px;
//   }
//   @media (max-width: 767px) {
//     width: 400px;
//     position: fixed;
//     top: 25%;
//   }
// `

// const StyledImage1 = styled(GajoLogoMobile)`
//   width: 250px;
// //   @media (max-width: ${props => props.theme.screen.md}) {
// //     width: 400px;
// //   }
// //   @media (max-width: ${props => props.theme.screen.sm}) {
// //     width: 150px;
// //   }
// `
