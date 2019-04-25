import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const CustomImage = () => 
    <img 
      style={{
        maxWith: 42,
        maxHeight: 42,
        width: "auto",
        height: "auto",
        flexShrink: 0,
        marginRight: 16
      }}
      src={require('../../content/assets/beanloop_symbol_positiv.png')} 
      alt="Beanloop logotype"
    />

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        console.log(data.avatar.childImageSharp.fixed)
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: 0,
              alignItems: "center"
            }}
          >
            <CustomImage/>
            <div>
              <p>
                <strong>{author}</strong>, the passion for modern web technologies and app development.
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  Follow us on Twitter
                </a>
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/beanloop_symbol_positiv.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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

export default Bio
