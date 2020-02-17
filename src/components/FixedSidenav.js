import React, { Component } from "react"
import Logo from "../assets/img/fixed_sidenav_logo.png"
import { Link } from "gatsby"
import M from "materialize-css"
if (typeof window !== "undefined") {
  require("materialize-css/dist/js/materialize.min.js")
}

class FixedSidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
    }
    M.Sidenav.init(this.Sidenav, options)
  }
  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav
          }}
          id="slide-out"
          className="sidenav sidenav-fixed custom-fixed-sidenav"
        >
          <li>
            <div className="user-view center-align">
              <Link to="/">
                <img className="responsive-img" src={Logo} />
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/about"
              className="custom-fixed-sidenav-link view-profile-link"
            >
              <i className="material-icons custom-icon fixed-sidenav-icon white-text">
                person_outline
              </i>
              <span className="white-text tomorrow fw-600">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="custom-fixed-sidenav-link view-profile-link"
            >
              <i className="material-icons custom-icon fixed-sidenav-icon white-text">
                work
              </i>
              <span className="white-text tomorrow fw-600">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="custom-fixed-sidenav-link view-profile-link"
            >
              <i className="material-icons custom-icon fixed-sidenav-icon white-text">
                contact_mail
              </i>
              <span className="white-text tomorrow fw-600">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default FixedSidenav
