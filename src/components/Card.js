import React from "react"
import { Link } from "gatsby"
// import styled from "styled-components"
import Image from "gatsby-image"

const Card = ({ title, image, description, slug }) => (
  <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" fluid={image} alt={image} />
      <div className="px-5 py-4">
        <Link to={`/${slug}`}>
          <div className="font-bold text-xl mb-2">{title}</div>
        </Link>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  </div>
)

export default Card
