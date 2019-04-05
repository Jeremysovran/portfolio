import React from "react"
import { Link } from "gatsby"
import './layout.scss';
import { FaAngleLeft, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link className="link"
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <div>
        <h1>
          <Link className="link"
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <div id="backHome">
          <Link
            className="link"
            to={`/`}
          >
            <FaAngleLeft /><span> Retour à l'accueil</span>
          </Link>
          </div>
        </div>
      )
    }
    return (
      <div className="bodyApp">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
        <div id="footer-wrap">
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        <div id="developer">
          Jeremy Sovran, développeur Front-End
        </div>
        </div>
        <div>
        <a href="https://twitter.com/jeremysov" target="_blank">
        <FaTwitter className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/jeremysovran/" target="_blank">
        <FaLinkedin className="icon"/>
        </a>
        <a href="https://www.instagram.com/jeremysov/" target="_blank">
        <FaInstagram className="icon"/>
        </a>
        <a href="https://github.com/Jeremysovran" target="_blank">
        <FaGithub className="icon"/>
        </a>
        </div>
        </div>
        </footer>
      </div>
    )
  }
}

export default Layout
