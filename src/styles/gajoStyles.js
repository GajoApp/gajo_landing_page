import styled from "styled-components"
import GajoLogo from "../components/common/svgs/gajo_logo"
import Img from "gatsby-image"

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
    margin-bottom: 10%;
    color: black;
    font-family: Karla;
    font-style: normal;
    font-weight: 400;
  }
`

// const BackgroundS = styled(BackgroundDecider)``

const Flex = styled.div`
  display: grid;
  padding-top: 5%;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 40% 40% auto 1fr 1fr;
  grid-gap: 15%;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 0%;
  }
`
const ImageWrapperPhone = styled.div`
    padding-bottom: 40%
//   justify-self: end;
//   align-self: center;
//   @media (max-width: ${props => props.theme.screen.md}) {
//     justify-self: center;
//   }
`

const FirstNameDiv = styled.div`
  padding-right: 10%;
`
const Label = styled.div`
  color: black;
  font-family: Karla;
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
  width: 90%;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 50%;
  // @media (max-width: 1848px) {
  //   right: 70px;
  //   width: 800px;
  // }
  // @media (max-width: 1199px) {
  //   width: 600px;
  // }
  // @media (max-width: 991px) {
  //   width: 400px;
  // }
  // @media (max-width: 767px) {
  //   width: 200px;
  // }
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

export {
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
}
