import React from "react"
import styles from "./projectPreview.module.css"
import { Link } from "gatsby"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ node }) => {
  return (
    <div className={styles.project_preview}>
      <h2>{node.frontmatter.title}</h2>
      <h3>Language: {node.frontmatter.language}</h3>
      <div className={styles.links}>
        <Link to={node.fields.slug}> <FontAwesomeIcon icon={faBook}/> Read more</Link>
        <a href={node.frontmatter.githuburl}>View on Github <FontAwesomeIcon icon={faGithub}/></a>
      </div>
    </div>
  )
}
