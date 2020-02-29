import React from "react"
import styles from "./demoPreview.module.css"
import { Link } from "gatsby"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default ({ node }) => {
  return (
    <div className={styles.demoPreview}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <a href={node.frontmatter.githuburl}> <FontAwesomeIcon icon={faGithub} /> Github</a>
        <a href={node.frontmatter.demo}><FontAwesomeIcon icon={faDesktop} /> Demo</a>
    </div>
  )
}
