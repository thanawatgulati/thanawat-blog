import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 450px;
  margin: auto;
  padding-top: 40px;
`

const Header = () => (
  <header>
    <div className="flex justify-center">
      <Link to="/">
        <Img src={`../../logo.png`} alt="logo" />
      </Link>
    </div>
  </header>
)

export default Header
