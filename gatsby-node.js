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
  //   console.log("here")

  const { createPage } = actions
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
  //   console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/markdownTemplate.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const languagesSet = new Set()
  languageResult.data.allMarkdownRemark.edges.map(({ node }) =>
    node.frontmatter.language.forEach(lang => {
      languagesSet.add(lang)
    })
  )
  const languages = Array.from(languagesSet).sort()
  const languageTemplate = path.resolve("./src/templates/languageTemplate.js")

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
}
