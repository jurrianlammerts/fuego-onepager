import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { createGlobalStyle } from "styled-components"

import Header from "../components/header"

// Background assets
import SectionOneBackground from "../components/svg/sections/sectionOne"
import SectionTwoBackground from "../components/svg/sections/sectionTwo"
import SectionThreeBackground from "../components/svg/sections/sectionThree"

// Icons
import IconOne from "../components/svg/icons/one"
import IconTwo from "../components/svg/icons/two"
import IconThree from "../components/svg/icons/three"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.7;
    font-weight: 300;
    font-family: "Open Sans";
    color: #393939;
  }
  h1 {
    font-family: 'Baloo Bhai';
    font-size: 64px;
    font-weight: 100;
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: #393939;;
  }
  button {  font-family: "Open Sans"; }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <GlobalStyles />
      <Header subTitle="Guido, Jurrian, Jerfi & Anneloes" />
      <Welcome>
        <div className="content-wrapper">
          <h1>Over Team Fuego</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="image-wrapper">
          <Img
            fixed={data.teamphoto.childImageSharp.fixed}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </Welcome>
      <Deskresearch>
        <div className="background">
          <SectionOneBackground />
        </div>
        <div className="left">
          <div className="item">
            <div className="icon-wrapper">
              <IconOne />
            </div>
            <p>
              We hebben onderzoek gedaan naar bestaande campanges en acties de
              de brandweer op dit moment uitvoert om mensen voor te lichten over
              brand.
            </p>
          </div>
          <div className="item">
            <div className="icon-wrapper">
              <IconTwo />
            </div>
            <p>
              Ook hebben we onderzoek gedaan naar de duikteams van de VR-RR. We
              kwamen erachter dat dit team niet heel veel in actie hoeft te
              komen.
            </p>
          </div>
          <div className="item">
            <div className="icon-wrapper">
              <IconThree />
            </div>
            <p>
              Tot slot hebben we deskresearch gedaan naar de medische
              hulpverlening die de brandweer uitvoert. Hierbij kwamen we
              erachter dat ze het snelst ter plaatse zijn.
            </p>
          </div>
        </div>
      </Deskresearch>
      <FieldResearch>
        <div className="title">
          <h1>Fieldresearch</h1>
        </div>
        <div className="diagonal-line" />
      </FieldResearch>
      <OntwerpCriteria>
        <div className="background">
          <SectionTwoBackground />
        </div>
        <div className="content">
          <ol>
            <li>
              Het product of de dienst moet betrouwbaar zijn (Fieldresearch
              brandweer)
            </li>
            <li>
              De brandweer wil niet afhankelijk zijn van het product
              (Fieldresearch brandweer)
            </li>
            <li>
              Het product bevat een nieuwe technologie voor VR-RR (briefing
              opdrachtgever){" "}
            </li>
            <li>
              Het product moet de communicatie tussen brandweer en slachtoffer
              verbeteren (Fieldresearch)
            </li>
          </ol>
          <h1>3 Concepten</h1>
        </div>
      </OntwerpCriteria>
      <Concepten>
        <div className="diagonal-line" />
      </Concepten>
      <BlackBox>
        <div className="background">
          <SectionThreeBackground />
        </div>
      </BlackBox>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    teamphoto: file(relativePath: { eq: "teamphoto.JPG" }) {
      childImageSharp {
        fixed(width: 450, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Welcome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  @media screen and (min-width: 1264px) {
    flex-direction: row-reverse;
  }
  .image-wrapper {
    display: none;
    @media screen and (min-width: 1264px) {
      display: block;
      margin-top: 64px;
      padding: 16px 16px 0 16px;
      width: 100%;
      height: 100%;
    }
  }
  .content-wrapper {
    width: 100%;
    padding: 0 64px;
    @media screen and (min-width: 1264px) {
      flex-direction: row-reverse;
      padding: 16px 64px 16px 16px;
    }
  }
`

const Deskresearch = styled.div`
  margin-bottom: 144px;
  .background {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .left {
    padding: 160px 0 0 64px;
    width: 70%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .item {
    height: 400px;
    width: 100%;
    max-width: 175px;
    text-align: center;
    position: relative;
    .icon-wrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    p {
      margin-top: 120px;
    }
  }
`

const FieldResearch = styled.div`
  .diagonal-line {
    height: 750px;
    position: relative;
    background-color: #525fb7;
    transform: skewY(-3deg);
  }
  .title {
    color: white;
    position: absolute;
    left: 40%;
    transform: translateX(-60%);
    z-index: 10;
  }
`

const OntwerpCriteria = styled.div`
  height: 600px;
  .background {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .content {
    position: relative;
    ol {
      position: absolute;
      margin-top: 160px;
      left: 50%;
      transform: translateX(-45%);
      line-height: 2.5;
      font-size: 16px;
    }
    h1 {
      color: #525fb7;
      position: absolute;
      top: 575px;
      left: 56%;
    }
  }
`

const Concepten = styled.div`
  width: 100%;
  height: 460px;
  .diagonal-line {
    margin-top: 300px;
    height: 450px;
    position: relative;
    background-color: #525fb7;
    transform: skewY(3deg);
  }
`

const BlackBox = styled.div`
  width: 100%;
  height: 850px;
  .background {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Footer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #525fb7;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`

export default IndexPage
