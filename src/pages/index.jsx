import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    
      <Layout>
        <SEO title="Home" description="This is home page"/>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="flower and eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simple recipes</h1>
                <h4>No fluff, just recipes</h4>
              </div>
            </div>
          </header>
          <AllRecipes />
        </main>
      </Layout>
    
  )
}
