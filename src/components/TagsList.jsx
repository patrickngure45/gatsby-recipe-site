import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import SetupTags from "../utils/SetupTags"

const Tags = ({ recipes }) => {
  const newTagsArray = SetupTags(recipes)

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTagsArray.map((tag, index) => {
          const [text, value] = tag
           const slug=slugify(text,{lower:true})
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
