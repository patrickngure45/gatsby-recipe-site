import { graphql, Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SetupList from "../utils/SetupTags"

const Tags = ({ data }) => {
  const newTagsArray = SetupList(data.allContentfulRecipe.nodes)

  return (
    <Layout>
      <SEO title="Tags"/>
      <main className="page">
        <section className="tags-page">
          {newTagsArray.map((tag, index) => {
            const [text, value] = tag
             const slug=slugify(text,{lower:true})
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
