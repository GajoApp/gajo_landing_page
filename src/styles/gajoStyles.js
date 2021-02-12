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
    @media (max-width: ${props => props.theme.screen.xlg}) {
      font-size: 3.25rem;
      padding-top: 0%;
      line-height: 3.65rem;
    }
    @media (max-width: ${props => props.theme.screen.lg}) {
      font-size: 3rem;
      padding-top: 0%;
      line-height: 2.95rem;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      font-size: 2.25rem;
    }
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
    padding-top: 5%;
    @media (max-width: ${props => props.theme.screen.xlg}) {
      font-size: 2rem;
      padding-top: 0%;
    }
    @media (max-width: ${props => props.theme.screen.lg}) {
      font-size: 1.25rem;
      padding-top: 0%;
    }
    @media (max-width: ${props => props.theme.screen.md}) {
      font-size: 2.25rem;
      padding-top: 0%;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      font-size: 1rem;
      padding-top: 17%;
      line-height: 1.5rem;
    }
  }
`

// const BackgroundS = styled(BackgroundDecider)``

const Flex = styled.div`
  display: grid;
  padding-top: 5%;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 40% 40%;
  grid-gap: 45%;
  @media (max-width: ${props => props.theme.screen.xlg}) {
    grid-template-columns: 40% 40%;
    grid-gap: 40%;
  }
  @media (max-width: ${props => props.theme.screen.lgg}) {
    grid-template-columns: 40% 40%;
    grid-gap: 20%;
  }
  @media (max-width: ${props => props.theme.screen.lg}) {
    grid-template-columns: 40% 40%;
    grid-gap: 25%;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 5%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 0%;
  }
`
const ImageWrapperPhone = styled.div`
    padding-bottom: 50%
    align-self: center;
    @media (max-width: ${props => props.theme.screen.md}) {
        padding-bottom: 0%
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
        padding-bottom: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const FirstNameDiv = styled.div`
  padding-right: 10%;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-right: 0%;
  }
`
const Label = styled.div`
  color: black;
  font-family: Karla;
  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
    font-size: 2.25rem;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    font-size: 1rem;
  }
`

const FormConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: ;
  @media (max-width: ${props => props.theme.screen.xlg}) {
    font-size: 1.5rem;
    padding-top: 0%;
  }
`
const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.theme.screen.md}) {
    flex-direction: column;
  }
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
  font-size: 1.3rem;
  color: grey;
  line-height: 1.4rem;
  width: 100%;
  text-align: left;
  height: 2.5rem;
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
    font-family: Karla;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
  padding-bottom: 5%;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-self: center;
    padding-bottom: 0%;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    padding-bottom: 0%;
  }
`

const StyledImage = styled(Img)`
  width: 50%;
  @media (max-width: ${props => props.theme.screen.xlg}) {
    width: 65%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 70%;
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
