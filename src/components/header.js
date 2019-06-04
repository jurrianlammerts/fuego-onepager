import React from "react"
import styled from "styled-components"
import Background from "./svg/background"
import Logo from "./svg/logo"

const Header = ({ subTitle }) => (
  <Wrapper>
    <Container>
      <Logo />
      <h3>{subTitle}</h3>
    </Container>
    <Background />
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
`

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h3 {
    text-align: center;
    color: white;
    font-weight: 300;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`

export default Header
