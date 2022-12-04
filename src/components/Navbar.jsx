import React from "react";
import "../styles/NavbarStyle.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub , faFacebook , faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome , faUser , faList , faBriefcase , faComments } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {

  const FacebookHandler = () => {
    window.location = "https://www.facebook.com"
  }

    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <a className="Myname">
              <span className="af-three"></span>
              <span className="af-four"></span>
              Mohamed Essam
              <span className="af-one"></span>
              <span className="af-two"></span>
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} color="white" className="icon" />
                <small>Home</small>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faUser} color="white" className="icon" />
                <small>About</small>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FontAwesomeIcon icon={faList} color="white" className="icon" />
                <small>Services</small>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  color="white"
                  className="icon"
                />
                <small>Portfolio</small>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FontAwesomeIcon
                  icon={faComments}
                  color="white"
                  className="icon"
                />
                <small>Contact</small>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://github.com/Mohamed33362">
            <FontAwesomeIcon
              icon={faGithub}
              className="gihubIcon"
              fontSize="30px"
            />
          </a>
          <a href="https://www.facebook.com/mohamed.essm.52">
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebookIcon"
              fontSize="30px"
            />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-essam-015378255/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="linkedinIcon"
              fontSize="30px"
            />
          </a>
        </div>
      </div>
    );
}

export default NavBar