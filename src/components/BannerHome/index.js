/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {
  Grid
} from 'semantic-ui-react';
import './style.scss';


function BannerHome() {
  return (
    <StaticQuery
    query={bannerQuery}
    render={data => {
      const { author } = data.site.siteMetadata
      return (
    <div id="test">
      <div id="banner">
      <Grid relaxed stackable>
      <Grid.Row columns={2} >
      <Grid.Column>
      <div id="banner-content">
          <p>Jérémy
          <span>Sovran</span>
          </p>
          <h2>
              développeur front-end / React.js
          </h2>
          <hr/>
          <div id="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste optio corrupti, soluta eaque harum.
          </div>
          <a href="#projectPart" className="buttonLeft"><span>mes projets</span></a>
          <a href="#contact" className="buttonRight"><span>contact</span></a>
      </div>
      </Grid.Column>
      <Grid.Column only='computer'>
          <Image
          className="imageBanner"
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
          />
          </Grid.Column>
          </Grid.Row>
          </Grid>
</div>
</div>
        )
      }}
    />
  )
}

const bannerQuery = graphql`
  query BannerQuery {
    avatar: file(absolutePath: { regex: "/test2.jpg/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default BannerHome
