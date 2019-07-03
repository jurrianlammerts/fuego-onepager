import React, { Component } from "react"
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
    font-size: 1.8rem;
    line-height: 1.7;
    font-weight: 300;
    font-family: "Open Sans";
    color: #393939;
    position: relative;
    padding-bottom: 20rem;
  }
  h1 {
    font-family: 'Baloo Bhai';
    font-size: 64px;
    font-weight: 100;
    margin-bottom: 0;
  }
  .link {
    background:
     linear-gradient(
       to bottom, #FBB5B5 0%,
       #FBB5B5 100%
     );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    color: #393939;
    text-decoration: none;
    transition: background-size .2s;
    :hover {
      background-size: 4px 50px;
    }
  }
  /* arrow buttons */
.button {
  display:table;
  margin:0 auto;
  text-decoration:none;
  color:#fff;
  }
span {
  display:table-cell;
  vertical-align:middle;
  background-color:#FBB5B5;
  padding: 0 .5em 0 1em; 
  line-height:1;
  }
.button:before, .button:after {
  display:table-cell;
  content:'';
  border-top:1.5em solid;
  border-bottom:1.5em solid;
  border-left:1.5em solid;
  }
.button:after {
  border-top-color:transparent;
  border-bottom-color:transparent;
  border-left-color:#FBB5B5;
  }

/* hover */
.button:hover span {background-color:#525fb7;}
.button:hover:after {border-left-color:#525fb7;}
`

class IndexPage extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: 0,
    }
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - 50)
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66)
    this.setState({ intervalId: intervalId })
  }

  render() {
    const { data } = this.props
    console.log(this.state)
    console.log(data)
    return (
      <>
        <GlobalStyles />
        <Header subTitle="Guido, Jurrian, Jerfi & Anneloes" />
        <Welcome>
          <div className="content-wrapper">
            <h1>Over Team Fuego</h1>
            <p>
              Tijdens het project Medialab bundelen wij van team Fuego al onze
              disciplines om samen voor de{" "}
              <a className="link" href="https://vr-rr.nl/">
                Veiligheidsregio Rotterdam-Rijnmond
              </a>{" "}
              een innovatief concept te bedenken.
            </p>
            <p>
              Het doel van deze opdracht is om aan het einde van de periode te
              zorgen dat technologie bijdraagt om de werkzaamheden van de
              veiligheidsregio beter te laten verlopen.
            </p>
            <p>
              Binnen het team heeft niemand ervaring binnen de sector van
              veiligheid. Wel is er vanuit de opdrachtgever ruimte om ons als
              team verder te verdiepen in de VR-RR.
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
                de brandweer op dit moment uitvoert om mensen voor te lichten
                over brand.
              </p>
            </div>
            <div className="item">
              <div className="icon-wrapper">
                <IconTwo />
              </div>
              <p>
                Ook hebben we onderzoek gedaan naar de duikteams van de VR-RR.
                We kwamen erachter dat dit team niet heel veel in actie hoeft te
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
          <div className="images">
            <Img
              fixed={data.fieldresearchOne.childImageSharp.fixed}
              style={{
                margin: "0 32px",
              }}
            />
            <Img
              fixed={data.fieldresearchTwo.childImageSharp.fixed}
              style={{
                margin: "0 32px",
              }}
            />
            <Img
              fixed={data.fieldresearchThree.childImageSharp.fixed}
              style={{
                margin: "0 32px",
              }}
            />
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
          <div className="images">
            <Img
              fixed={data.conceptSlimmeSleutels.childImageSharp.fixed}
              style={{
                margin: "0 32px",
              }}
            />
            <Img
              fixed={data.conceptBlackbox.childImageSharp.fixed}
              style={{
                margin: "0 32px",
              }}
            />
            <Img
              fixed={data.conceptVluchtGadget.childImageSharp.fixed}
              style={{
                margin: "0 32px",
              }}
            />
          </div>
          <div className="diagonal-line-white" />
          <div className="diagonal-line" />
          <h1>1e iteratie ‘black box’</h1>
          <Img
            fixed={data.blackbox.childImageSharp.fixed}
            style={{
              display: "block",
              margin: "0 64px",
            }}
          />
        </Concepten>
        <BlackBox>
          <div className="background">
            <SectionThreeBackground />
          </div>
        </BlackBox>
        <Img
          fixed={data.userjourney.childImageSharp.fixed}
          style={{
            display: "block",
            margin: "120px auto",
          }}
        />
        <Prototype>
          <div className="diagonal-line" />
          <h1>Eerste prototype</h1>
          <div className="image-container">
            <div className="images">
              <Img fixed={data.prototypeOne.childImageSharp.fixed} />
              <Img fixed={data.prototypeTwo.childImageSharp.fixed} />
            </div>
            <div className="images">
              <Img fixed={data.prototypeThree.childImageSharp.fixed} />
              <Img fixed={data.prototypeFour.childImageSharp.fixed} />
            </div>
            <a
              className="button"
              href="https://blackbox-app-p1.guidovdriet.now.sh/"
            >
              <span>Link naar prototype</span>
            </a>
          </div>
        </Prototype>
        <Testing>
          <h1>Sensor test</h1>
          <div className="video">
            <iframe
              title="mq2 sensor test"
              width="800"
              height="400"
              src="https://www.youtube.com/embed/04uRvb_znwg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="image">
            <Img fixed={data.sensorData.childImageSharp.fixed} />
          </div>
          <div className="diagonal-line" />
        </Testing>
        <Product>
          <div className="diagonal-line" />
          <h1>Interface test</h1>
          <div className="image-container">
            <div className="images">
              <Img fixed={data.testPhotoOne.childImageSharp.fixed} />
              <Img fixed={data.testPhotoTwo.childImageSharp.fixed} />
            </div>
            <div className="images">
              <Img fixed={data.testPhotoThree.childImageSharp.fixed} />
              <Img fixed={data.testPhotoFour.childImageSharp.fixed} />
            </div>
          </div>
        </Product>
        <Prototype>
          <div className="diagonal-line" />
          <h1>Final prototype</h1>
          <div className="image-container">
            <div className="images">
              <Img fixed={data.interfaceOne.childImageSharp.fixed} />
              <Img fixed={data.interfaceTwo.childImageSharp.fixed} />
            </div>
            <a className="button" href="https://app.guidovdriet.now.sh/">
              <span>Link naar prototype</span>
            </a>
          </div>
        </Prototype>
        <Testing>
          <div className="spacing" />
          <h1>Presentation</h1>
          <div className="image-container">
            <div className="images">
              <Img fixed={data.presentationOne.childImageSharp.fixed} />
              <Img fixed={data.presentationTwo.childImageSharp.fixed} />
            </div>
          </div>
          <a
            className="button"
            href="https://drive.google.com/a/hr.nl/file/d/1YEuy3tnZanHBvzkfqUy1mKN1zl_U7lrS/view?usp=sharing"
          >
            <span>Link naar presentatie</span>
          </a>
        </Testing>
        <Footer>
          <button onClick={() => this.scrollToTop()}>
            <i className="arrow-up" />
          </button>
        </Footer>
      </>
    )
  }
}

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
    padding: 160px 64px 0 64px;
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
    z-index: -1;
  }
  .title {
    color: white;
    position: absolute;
    left: 40%;
    transform: translateX(-60%);
    z-index: 10;
  }
  .images {
    width: 100%;
    position: absolute;
    margin: 200px 0;
    padding: 0 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const OntwerpCriteria = styled.div`
  height: 500px;
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
  height: 500px;
  position: relative;
  h1 {
    color: #525fb7;
    margin-left: 64px;
  }
  .diagonal-line-white {
    margin-top: 300px;
    height: 100px;
    position: relative;
    background-color: #fff;
    transform: skewY(3deg);
    z-index: -1;
  }
  .diagonal-line {
    height: 400px;
    position: relative;
    background-color: #525fb7;
    transform: skewY(3deg);
    z-index: -1;
  }
  .images {
    width: 100%;
    position: absolute;
    padding: 0 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Testing = styled.div`
  width: 100%;
  height: 900px;
  position: relative;
  z-index: 10;
  h1 {
    text-align: center;
    color: #525fb7;
    margin-left: 64px;
  }
  .diagonal-line {
    height: 300px;
    margin: 64px 0;
    position: relative;
    background-color: #525fb7;
    transform: skewY(3deg);
    z-index: -1;
  }
  .video {
    margin: 64px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .image {
    left: 50%;
    position: absolute;
    height: 450px;
    margin-top: 550px;
    margin-left: 75px;
    transform: translateX(-50%);
  }
  .image-container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }
  .images {
    margin: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .spacing {
    height: 100px;
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

const Product = styled.div`
  position: relative;
  margin-top: 240px;
  .diagonal-line {
    margin-top: 120px;
    height: 200px;
    background-color: #525fb7;
    transform: skewY(-3deg);
    z-index: -1;
  }
  h1 {
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-45%);
  }
  .image-container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }
  .images {
    margin: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Prototype = styled.div`
  position: relative;
  .diagonal-line {
    height: 200px;
    background-color: #525fb7;
    transform: skewY(-3deg);
    z-index: -1;
  }
  h1 {
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-45%);
  }
  .image-container {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
  }
  .images {
    margin: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Footer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #525fb7;
  position: absolute;
  bottom: 0;
  button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    margin: 48px;
    z-index: 10;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    .arrow-up {
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid #fff;
    }
    :hover {
      margin: 54px 48px;
    }
  }
`

export const query = graphql`
  query {
    teamphoto: file(relativePath: { eq: "teamphoto.jpeg" }) {
      childImageSharp {
        fixed(width: 600, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    blackbox: file(relativePath: { eq: "blackbox.png" }) {
      childImageSharp {
        fixed(width: 750, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    userjourney: file(relativePath: { eq: "userjourney.png" }) {
      childImageSharp {
        fixed(width: 900, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fieldresearchOne: file(relativePath: { eq: "fieldresearch-one.png" }) {
      childImageSharp {
        fixed(width: 450, height: 645) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fieldresearchTwo: file(relativePath: { eq: "fieldresearch-two.png" }) {
      childImageSharp {
        fixed(width: 450, height: 645) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fieldresearchThree: file(relativePath: { eq: "fieldresearch-three.png" }) {
      childImageSharp {
        fixed(width: 450, height: 645) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    conceptBlackbox: file(relativePath: { eq: "concept-blackbox.png" }) {
      childImageSharp {
        fixed(width: 600, height: 860) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    conceptSlimmeSleutels: file(
      relativePath: { eq: "concept-slimmesleutel.png" }
    ) {
      childImageSharp {
        fixed(width: 600, height: 860) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    conceptVluchtGadget: file(
      relativePath: { eq: "concept-vluchtgadget.png" }
    ) {
      childImageSharp {
        fixed(width: 600, height: 860) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    prototypeOne: file(relativePath: { eq: "prototype-one.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    prototypeTwo: file(relativePath: { eq: "prototype-two.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    prototypeThree: file(relativePath: { eq: "prototype-three.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    prototypeFour: file(relativePath: { eq: "prototype-four.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    testPhotoOne: file(relativePath: { eq: "test-setup.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    testPhotoTwo: file(relativePath: { eq: "test-user.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    testPhotoThree: file(relativePath: { eq: "test-sensor.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    testPhotoFour: file(relativePath: { eq: "test-display.png" }) {
      childImageSharp {
        fixed(width: 555, height: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sensorData: file(relativePath: { eq: "mq2-data.png" }) {
      childImageSharp {
        fixed(width: 900, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    interfaceOne: file(relativePath: { eq: "final-interface.png" }) {
      childImageSharp {
        fixed(width: 600, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    interfaceTwo: file(relativePath: { eq: "final-interface-2.png" }) {
      childImageSharp {
        fixed(width: 600, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    presentationOne: file(relativePath: { eq: "presentation-1.png" }) {
      childImageSharp {
        fixed(width: 600, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    presentationTwo: file(relativePath: { eq: "presentation-2.png" }) {
      childImageSharp {
        fixed(width: 600, height: 450) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
