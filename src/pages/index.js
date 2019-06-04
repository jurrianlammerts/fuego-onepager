import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

const theme = {
  primary: "#8B569E",
  secondary: "#B3EBF8",
  black: "#393939",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  bsLight: "0 6px 12px 0 rgba(0, 0, 0, 0.09)",
}

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
    line-height: 2;
    font-family: "Open Sans";
  }
  h1 {
    font-family: 'Baloo Bhai';
    font-size: 48px;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: "Open Sans"; }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header subTitle="Guido, Jurrian, Jerfi & Anneloes" />
          <Welcome>
            {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
            <h1>Over Team Fuego:</h1>
          </Welcome>
        </>
      </ThemeProvider>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "../../static/images/teamphoto.JPG" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Welcome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 30px 30px; */
  grid-auto-flow: row;
`

export default IndexPage
