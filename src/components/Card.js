import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
import styled from "styled-components"
import Image from "gatsby-image"

const Title = styled.h4`
  color: black;
`
// const Image = styled.img``

const Card = ({ title, image, description }) => (
  <div>
    <Image fluid={image} />
    <Title>{title}</Title>
    <p>{description}</p>
  </div>
)

export default Card
