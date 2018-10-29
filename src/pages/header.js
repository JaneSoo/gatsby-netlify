import React from "react"
import logo from '../images/logo.png'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginTop: `1.5rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <nav class="navbar navbar-light bg-light">
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </nav>

)
