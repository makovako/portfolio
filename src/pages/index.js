import React from "react"
import Container from "../components/container"
import Section from "../components/section"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Container>    
      <Section name="My projects" type="my-projects"></Section>
      <Section name="School projects" type="school-projects"></Section>
      {/* <Section name="Crash courses" type="crash-course"></Section> */}
  </Container>
)
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
