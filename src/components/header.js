import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import linkIcon from "./linkIcon.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <h4 style={{ margin: 0 }}>
      <Link to="/" className="title">
        {siteTitle}
      </Link>
    </h4>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/iddan/react-spreadsheet">
            GitHub <img src={linkIcon} height={12} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
