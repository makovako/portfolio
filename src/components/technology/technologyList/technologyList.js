import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from './technologyList.module.css'

export default props => {
  const data = useStaticQuery(graphql`
    query TechnologyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              technology
            }
          }
        }
      }
    }
  `)

  const technologySet = new Set()
  data.allMarkdownRemark.edges.map(({ node }) =>
    node.frontmatter.technology.forEach(tech => {
        technologySet.add(tech)

    }
    )
  )
  const technologies = Array.from(technologySet).sort()

  return (
    <section>
        <h2>Technologies</h2>
        <div className={styles.technologyList}>

      {
          technologies.map(tech => (
              <Link key={tech} to={`/technology/${tech.toLowerCase()}`}>{tech}</Link>
              ))
            }
            </div>
    </section>
  )
}
