import React from "react"
import { graphql} from "gatsby"
import Container from "../components/container"
import styles from "./markdownTemplate.module.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Container>
      <div className={styles.portfolio}>
        <h2>{post.frontmatter.title}</h2>
        {post.frontmatter.language != null && (
          <div className={styles.language}>
            <h4>Language:</h4>
            <ul>
              {post.frontmatter.language.map(lang => (
                <li>{lang}</li>
              ))}
            </ul>
          </div>
        )}
        {post.frontmatter.technology != null && (
          <div className={styles.technology}>
            <h4>Technologies:</h4>
            <ul>
              {post.frontmatter.technology.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className={styles.github_link}>
          <a href={post.frontmatter.githuburl}><FontAwesomeIcon icon={faGithub}/> View on Github</a>
          {post.frontmatter.demo != null && <a href={post.frontmatter.demo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop}/> Demo</a>}
        </div>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        githuburl
        language
        technology
        demo
      }
      html
    }
  }
`
