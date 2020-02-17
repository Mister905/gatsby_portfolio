import React, { Component } from "react"
import Thumbs_Up from "../assets/img/thumbs_up.gif"
import FixedSidenav from "../components/FixedSidenav"

class Thanks extends Component {
  constructor() {
    super()
    if (typeof document !== `undefined`) {
      document.body.classList.add("bg-gray")
    }
  }
  render() {
    return (
      <div>
        <FixedSidenav />
        <div className="container custom-container">
          <div className="row mt-25">
            <div className="col m12 card about-card center-align">
              <div className="row mt-25">
                <div className="col m12">
                  <div className="component-heading fw-600">Thanks</div>
                </div>
              </div>
              <div className="row">
                <div className="col m8 offset-m2">
                  <img src={Thumbs_Up} alt="Thanks" className="thumbs-up-gif" />
                </div>
              </div>
              <div className="row follow-up-row">
                <div className="col m12 center-align">
                  <div className="follow-up">
                    I will reply to your request as soon as possible!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Thanks
