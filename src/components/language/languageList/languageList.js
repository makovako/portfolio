import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from './languageList.module.css'

export default props => {
  const data = useStaticQuery(graphql`
    query LanguageQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              language
            }
          }
        }
      }
    }
  `)

  const languagesSet = new Set()
  data.allMarkdownRemark.edges.map(({ node }) =>
    node.frontmatter.language.forEach(lang => {
        languagesSet.add(lang)

    }
    )
  )
  const languages = Array.from(languagesSet).sort()

  return (
    <section>
        <h2>Languages</h2>
        <div className={styles.languageList}>

      {
          languages.map(lang => (
              <Link key={lang} to={`/language/${lang.toLowerCase()}`}>{lang}</Link>
              ))
            }
            </div>
    </section>
  )
}
