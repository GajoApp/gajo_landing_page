import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../../global"
import kwesforms from "kwesforms"
import GajoLogo from "../svgs/gajo_logo"
import {
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
  HeaderTextGroup} from "../../../styles/gajoStyles"
import "@fontsource/karla"

export default function Desktop(props) {
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
    return(
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
    )
}
