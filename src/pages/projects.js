import React, { Component } from "react"
import Profile from "../assets/img/profile.jpg"
import FixedSidenav from "../components/FixedSidenav"
import mernbook from "../assets/img/project_images/mernbook/mernbook.png"
import mern_survey from "../assets/img/project_images/mern-survey/mern-survey.png"
import art_gallery from "../assets/img/project_images/art_gallery/art_gallery.png"
import skyline from "../assets/img/project_images/skyline/skyline.png"
import expensicon from "../assets/img/project_images/expensicon/expensicon.png"
import jeopardy from "../assets/img/project_images/jeopardy/jeopardy.png"
import { GoMarkGithub } from "react-icons/go"
import Head from "../components/Head"

class Projects extends Component {
  constructor() {
    super()
    typeof document !== `undefined`
      ? document.body.classList.add("bg-gray")
      : null
  }
  render() {
    return (
      <div>
        <Head title="My Projects" />
        <FixedSidenav />
        <div className="container custom-container">
          <div className="row mt-25">
            <div className="col m12 card">
              <div className="row">
                <div className="col m12 center-align mt-25">
                  <div className="component-heading fw-600">Projects</div>
                </div>
              </div>
              <div className="row mt-50">
                <div className="col m4 offset-m1 center-align">
                  <div className="row">
                    <div className="col m12">
                      <a
                        href="http://www.jeopardy.xyz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={jeopardy}
                          alt=""
                          className="responsive-img project-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <div className="valign-wrapper"></div>
                      <a
                        href="https://github.com/Mister905/mern-jeopardy"
                        target="_blank"
                        className="github-link"
                        rel="noopener noreferrer"
                      >
                        <GoMarkGithub className="github-icon" />
                        GitHub Repo
                      </a>
                      <p>
                        MERN-stack tribute to my favourite game show. Trivia
                        questions are provided by the{" "}
                        <a
                          href="http://jservice.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          jService API
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col m4 offset-m2 center-align">
                  <div className="row">
                    <div className="col m12">
                      <a
                        href="https://mernbook-905.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={mernbook}
                          alt=""
                          className="responsive-img project-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <div className="valign-wrapper"></div>
                      <a
                        href="https://github.com/Mister905/mernbook"
                        target="_blank"
                        className="github-link"
                        rel="noopener noreferrer"
                      >
                        <GoMarkGithub className="github-icon" />
                        GitHub Repo
                      </a>
                      <p>
                        MERN-stack social media app with JSON web token
                        authentication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m4 offset-m1 center-align">
                  <div className="row">
                    <div className="col m12">
                      <a
                        href="https://expensicon.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={expensicon}
                          alt=""
                          className="responsive-img project-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <div className="valign-wrapper"></div>
                      <a
                        href="https://github.com/Mister905/expensicon"
                        target="_blank"
                        className="github-link"
                        rel="noopener noreferrer"
                      >
                        <GoMarkGithub className="github-icon" />
                        GitHub Repo
                      </a>
                      <p>
                        Expense tracking React app with Google authentication
                        and Firebase storage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col m4 offset-m2 center-align">
                  <div className="row">
                    <div className="col m12">
                      <a
                        href="https://mern-survey-905.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={mern_survey}
                          alt=""
                          className="responsive-img project-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <div className="valign-wrapper"></div>
                      <a
                        href="https://github.com/Mister905/mern-survey"
                        target="_blank"
                        className="github-link"
                        rel="noopener noreferrer"
                      >
                        <GoMarkGithub className="github-icon" />
                        GitHub Repo
                      </a>
                      <p>
                        MERN-stack application that uses Stripe API to charge
                        users for a survey creation service. The application
                        sends emails and records responses with SendGrid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m4 offset-m1 center-align">
                  <div className="row">
                    <div className="col m12">
                      <a href="http://art-gallery.xyz/" target="_blank">
                        <img
                          src={art_gallery}
                          alt=""
                          className="responsive-img project-image"
                          rel="noopener noreferrer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <div className="valign-wrapper"></div>
                      <a
                        href="https://github.com/Mister905/laravel-art-gallery"
                        target="_blank"
                        className="github-link"
                        rel="noopener noreferrer"
                      >
                        <GoMarkGithub className="github-icon" />
                        GitHub Repo
                      </a>
                      <p>
                        Laravel application showcasing some of my favourite
                        artists and other timeless works of art
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col m4 offset-m2 center-align">
                  <div className="row">
                    <div className="col m12">
                      <a
                        href="https://skyline-905.netlify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={skyline}
                          alt=""
                          className="responsive-img project-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12">
                      <div className="valign-wrapper"></div>
                      <a
                        href="https://github.com/Mister905/skyline"
                        target="_blank"
                        className="github-link"
                        rel="noopener noreferrer"
                      >
                        <GoMarkGithub className="github-icon" />
                        GitHub Repo
                      </a>
                      <p>
                        Blog about the historical development of city skylines.
                        Created with Gatsby and Contentful CMS.
                      </p>
                    </div>
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

export default Projects
