import React, { Component } from "react"
import { Link } from "gatsby"
import M from "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import profile from "../assets/img/profile.jpg"

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true,
    }
    M.Sidenav.init(this.Sidenav, { edge: "right" })

    let instance = M.Sidenav.getInstance(this.Sidenav)
  }

  componentWillUnmount = () => {
    let instance = M.Sidenav.getInstance(this.Sidenav)
    instance.destroy()
  }

  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav
          }}
          id="slide-out"
          className="sidenav custom-sidenav"
        >
          <li>
            <div className="card sidenav-card">
              <div className="card-image">
                <img src={profile} />
                <span className="custom-card-title blue-text">James</span>
              </div>
            </div>
          </li>
          <li>
            <Link to="/about" className="custom-sidenav-link view-profile-link">
              <i className="material-icons custom-icon profile-icon blue-text">
                person_outline
              </i>
              <span className="blue-text tomorrow fw-600">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="custom-sidenav-link view-profile-link"
            >
              <i className="material-icons custom-icon profile-icon blue-text">
                work
              </i>
              <span className="tomorrow fw-600">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="custom-sidenav-link view-profile-link"
            >
              <i className="material-icons custom-icon profile-icon blue-text">
                contact_mail
              </i>
              <span className="tomorrow fw-600">Contact</span>
            </Link>
          </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger right">
          <i className="material-icons">menu</i>
        </a>
      </div>
    )
  }
}

export default Sidenav
