import React from "react"
import styles from "./demoList.module.css"
import { useStaticQuery, graphql } from "gatsby"
import DemoPreview from "./demoPreview"

export default props => {
  const data = useStaticQuery(graphql`
    query DemoQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              githuburl
              demo
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <section>
      <h2>Demos</h2>
      <div className={styles.project_list}>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.demo != null)
          .map(({ node }) => (
            <DemoPreview key={node.id} node={node} />
          ))}
      </div>
    </section>
  )
}
