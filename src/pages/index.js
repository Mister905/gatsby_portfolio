import React, { Component } from "react"
import logo from "../assets/img/logo.png"
import Sidenav from "../components/Sidenav"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import Head from "../components/Head"

class Landing extends Component {
  constructor() {
    super()
    document.body.classList.add("landing-bg")
  }

  componentWillUnmount = () => {
    document.body.classList.remove("landing-bg")
  }

  render() {
    return (
      <div>
        <Head title="Welcome" />
        <Sidenav />
        <div id="landing-overlay"></div>
        <div className="row landing-row">
          <div className="col s12 m2 offset-m1 center-align">
            <div className="row">
              <div className="col s12 m12">
                <img
                  src={logo}
                  alt="James McCarthy's Logo"
                  className="landing-logo responsive-img"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6 m6 right-align">
                <a href="https://github.com/Mister905" target="_blank">
                  <GoMarkGithub className="social-media-icon" />
                </a>
              </div>
              <div className="col s6 m6 left-align">
                <a
                  href="https://www.linkedin.com/in/james-mccarthy-159230199/"
                  target="_blank"
                >
                  <FaLinkedin className="social-media-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            <div className="row">
              <div className="col s10 offset-s1 m8 center-align">
                <span className="landing-heading">James McCarthy</span>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m8 center-align">
                <div className="landing-description">
                  Full-Stack Web Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
