import React, { Component } from "react"
import Profile from "../assets/img/profile.jpg"
import Head from "../components/Head"
import FixedSidenav from "../components/FixedSidenav"
import { Link } from "gatsby"

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
                    Welcome vistor. My name is James McCarthy. I started coding
                    in 2015 while studying at the University of Toronto. I was
                    initially attracted to the prospect of employment associated
                    with the growing demand for software professionals. I
                    discovered a genuine appreciation for the subject and
                    practice that extended beyond pragmatic motivations. In time
                    I discovered a valuable ability and eagerness to learn new
                    things and grow into the role of a developer.
                  </p>
                  <p className="about-text">
                    I am so fortunate for the personal growth and challenges
                    that accompany this path. I enjoy learning new
                    technologies/frameworks and applying these skills to
                    personal projects. You can sample some of my work{" "}
                    <Link to="/projects" className="about-link">
                      here
                    </Link>
                    .
                  </p>
                  <p className="about-text">
                    I am particularly interested in front-end web development as
                    well as developing mobile applications. My favourite
                    technologies at the moment are React and Node.js. Please
                    feel free to{" "}
                    <Link to="/contact" className="about-link">
                      contact me
                    </Link>{" "}
                    for any inquiry.
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
