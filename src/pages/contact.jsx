import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact"/>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch ?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              provident mollitia at commodi facilis beatae maxime dolore
              repellendus ipsam sed!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              ullam?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ut
              repellat nemo. Corporis, amet tempora!
            </p>
          </article>
          <article>
            <form className="form contact-form"
             action="https://formspree.io/f/xvodyokz"
  method="POST">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="name">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomeness!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default Contact
