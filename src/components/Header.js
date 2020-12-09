import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kelli Frazier</h1>
        <p>
          Leader / Educator / Influencer
        </p>
        <ul className="icons">
            <li>
              <a href="mailto:kelli.k.frazier@gmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li> 
            <li>
              <a href="https://www.linkedin.com/in/kelli-frazier" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Kelli_K_Frazier" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Philosophy
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Career
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('references')
            }}
          >
            References
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>        
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
