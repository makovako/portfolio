import React from "react"
import styles from "./projectPreview.module.css"
import { Link } from "gatsby"

export default ({ node }) => {
  return (
    <div className={styles.project_preview}>
      <h2>{node.frontmatter.title}</h2>
      <h3>Language: {node.frontmatter.language}</h3>
      <div className={styles.links}>
        <Link to={node.fields.slug}>Read more</Link>
        <a href={node.frontmatter.githuburl}>View on Github</a>
      </div>
    </div>
  )
}
