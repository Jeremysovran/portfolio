import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import { FaPoo } from "react-icons/fa"
import 'semantic-ui-css/semantic.min.css'
import {
  Grid
} from 'semantic-ui-react';
import BannerHome from "../components/BannerHome"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Code from "../components/Code"
import Projet from "../components/Projet"
import Contact from "../components/Contact"
import './style.scss';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log(data);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BannerHome />
        <Code />
        <Projet />
        <div id="blog">
        <h2>Mes posts</h2>
        <hr/>
        </div>
        <Grid relaxed stackable id="blogPosts">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Grid.Column mobile={16} tablet={8} computer={8} key={node.fields.slug} >
            <div className="blogPost">
                <Link to={node.fields.slug}>
            <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            <div className="blogText">
              <h3>
                  {title}
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              </div>
                </Link>
                </div>
            </Grid.Column>
          )
        })}
        </Grid>
        <Contact />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD", locale: "fr")
            title
            description
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`
