import React from "react"
import { Link } from "gatsby"
// import Layout from "../components/layout"
// import styled from "styled-components"
import Image from "gatsby-image"

// const Image = styled.img``

const Card = ({ title, image, description, slug }) => (
  <div>
    <div
      style={{ width: "350px" }}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
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
