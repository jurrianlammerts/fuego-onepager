import React from "react"
import styled from "styled-components"
import Background from "./svg/background"
import Logo from "./svg/logo"

const Header = ({ subTitle }) => (
  <>
    <Container>
      <Logo />
      <h3>{subTitle}</h3>
    </Container>
    <Background />
  </>
)

const Container = styled.div`
  h3 {
    text-align: center;
    color: white;
    font-weight: 300;
    @media screen and (max-width: 840px) {
      display: none;
    }
  }

  position: absolute;
  width: 300px;
  position: absolute;
  top: 25%;
  left: 50%;
  margin-left: -150px;
  @media screen and (max-width: 992px) {
    top: 20%;
  }
  @media screen and (max-width: 720px) {
    top: 8%;
  }
  @media screen and (max-width: 480px) {
    top: 3%;
  }
`

export default Header
