import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
const About = props => {
  console.log(props)
  return (
    <div>
      <Layout location={props.location}>
        <h2 className="postTitle">About</h2>
        <p className="postBody">
          I'm a developer enthusiastic about programming, and blockchain tech.<br/>
          This blog is my effort to share good knowledge.<br/><br/>
        </p>
      <div className="centerAndBotMargin">
      <a
          href={props.data.site.siteMetadata.social.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        &nbsp;&bull;&nbsp;
        <a
          href={props.data.site.siteMetadata.social.instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
        </div>
      </Layout>
      <SEO title="About" description="About KV" />
    </div>
  )
}

export const pageQuery = graphql`
  query AboutSummary {
    site {
      siteMetadata {
        social {
          githubUrl,
          instagramUrl
        }
      }
    }
  }
`

export default About
