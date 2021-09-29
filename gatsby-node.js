const path = require("path")
const Slugify =require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const getTagsArray = await graphql(`
    query getTags {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  getTagsArray.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug=Slugify(tag,{lower:true})
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.jsx`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
