import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ text }) => (
  <header
    style={{
      backgroundColor: `#1e93c2`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {text}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  text: PropTypes.string,
}

Header.defaultProps = {
  text: ``,
}

export default Header
