import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({ data }) => {
  const nodes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SEO title="About"/>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              exercitationem non quod asperiores amet, voluptatem id obcaecati
              aliquam voluptatum nisi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ab
              minus pariatur commodi enim consectetur.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomeness!</h5>
          <RecipesList recipes={nodes} />
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
export default About
