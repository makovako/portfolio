const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /**
   * Query for language pages
   */
  const languageResult = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              language
              githuburl
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  /**
   * Query for technology pages
   */
  const technologyResult = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              language
              githuburl
              technology
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  /**
   * Query for content pages
   */
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  /**
   * Creating content pages
   */
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/markdownTemplate.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  /**
   * Getting array of unique languages
   */
  const languagesSet = new Set()
  languageResult.data.allMarkdownRemark.edges.map(({ node }) =>
    node.frontmatter.language.forEach(lang => {
      languagesSet.add(lang)
    })
  )
  const languages = Array.from(languagesSet).sort()
  const languageTemplate = path.resolve("./src/templates/languageTemplate.js")

  /**
   * Creating page for each language
   */
  languages.forEach(lang => {
    const nodes = languageResult.data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.language.includes(lang) || false)
      .map(({ node }) => node)
    const path = `/language/${lang.toLowerCase()}`
    createPage({
      path,
      component: languageTemplate,
      context: {
        nodes,
      },
    })
  })

  /**
   * Getting array of unique technologies
   */
  const technologySet = new Set()
  technologyResult.data.allMarkdownRemark.edges.map(({ node }) =>
    node.frontmatter.technology.forEach(tech => {
      technologySet.add(tech)
    })
  )
  const technologies = Array.from(technologySet).sort()
  const technologyTemplate = path.resolve("./src/templates/technologyTemplate.js")

  /**
   * Creating page for each technology
   */
  technologies.forEach(tech => {
    const nodes = technologyResult.data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.technology.includes(tech) || false)
      .map(({ node }) => node)
    const path = `/technology/${tech.toLowerCase()}`
    createPage({
      path,
      component: technologyTemplate,
      context: {
        nodes,
      },
    })
  })
}
