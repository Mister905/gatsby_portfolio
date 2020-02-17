import React, { Component } from "react"
import Pooh from "../assets/img/pooh.jpg"
import FixedSidenav from "../components/FixedSidenav"
import { Link } from "gatsby"
import Head from "../components/Head"

class NotFound extends Component {
  constructor() {
    super()
    if (document !== `undefined`) {
      document.body.classList.add("bg-gray")
    }
  }
  render() {
    return (
      <div>
        <Head title="404 Error" />
        <FixedSidenav />
        <div className="container custom-container">
          <div className="row">
            <div className="col m12 center-align mt-50">
              <div className="component-heading fw-600">Oh bother...</div>
            </div>
          </div>
          <div className="row">
            <div className="col m8 offset-m2">
              <img src={Pooh} alt="Profile Image" className="responsive-img" />
            </div>
          </div>
          <div className="row">
            <div className="col m12 center-align">
              <p className="sorry fw-600">
                We couldn't find what you're looking for.
              </p>
              <p className="sorry fw-600">Sorry about that.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
