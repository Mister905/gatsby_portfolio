import React, { Component } from "react"
import Profile from "../assets/img/profile.jpg"
import Head from "../components/Head"
import FixedSidenav from "../components/FixedSidenav"

class About extends Component {
  constructor() {
    super()
    typeof document !== `undefined`
      ? document.body.classList.add("bg-gray")
      : null
  }
  render() {
    return (
      <div>
        <Head title="My Story" />
        <FixedSidenav />
        <div className="container custom-container">
          <div className="row mt-25">
            <div className="col m12 card about-card center-align">
              <div className="row mt-25">
                <div className="col m12">
                  <div className="component-heading fw-600">My Story</div>
                </div>
              </div>
              <div className="row">
                <div className="col m4 offset-m4">
                  <img
                    src={Profile}
                    alt="Profile Image"
                    className="responsive-img"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col m12 center-align">
                  <p className="about-text">
                    Welcome vistor. My name is James McCarthy. I am a web
                    developer from Hamilton, Ontario, Canada. I started learning
                    how to code in 2015 while studying history and political
                    science at the University of Toronto. I decided to pursue
                    software development professionally and I was pleased to
                    discover a genuine appreciation for the work involved. I
                    continue to welcome the challenges and rewards that follow
                    me on the road of professional development. I graduated from
                    Mohawk College's software development program in 2020. I
                    specialize in web and mobile development with a focus on
                    React and React Native. Please be sure to check out some of
                    my projects and feel free to contact me for any inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
