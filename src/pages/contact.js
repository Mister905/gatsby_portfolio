import React, { Component } from "react"
import Profile from "../assets/img/profile.jpg"
import FixedSidenav from "../components/FixedSidenav"
import mernbook from "../assets/img/project_images/mernbook/mernbook.png"
import mern_survey from "../assets/img/project_images/mern-survey/mern-survey.png"
import art_gallery from "../assets/img/project_images/art_gallery/art_gallery.png"
import dark_sky from "../assets/img/project_images/dark_sky/dark_sky.png"
import expensicon from "../assets/img/project_images/expensicon/expensicon.png"
import jeopardy from "../assets/img/project_images/jeopardy/jeopardy.png"
import { GoMarkGithub } from "react-icons/go"
import Head from "../components/Head"
// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
// https://github.com/sw-yx/gatsby-netlify-form-example-v2

class Projects extends Component {
  render() {
    return (
      <div>
        <Head />
        <FixedSidenav />
        <div className="container custom-container">
          <div className="row mt-25">
            <div className="col m8 offset-m2 card">
              <div className="row">
                <div className="col m12 center-align mt-25">
                  <div className="component-heading dark-blue-text fw-600">
                    Get in Touch
                  </div>
                </div>
              </div>
              <div className="row mt-25">
                <form
                  className="col m12 contact-form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  data-netlify-recaptcha="true"
                  action="/thanks"
                >
                  <div className="hidden">
                    <label>
                      Don’t fill this out if you're human:{" "}
                      <input name="bot-field" />
                    </label>
                  </div>

                  <div className="row">
                    <div className="col m10 offset-m1 custom-input-field">
                      <label className="dark-blue-text fw-600">
                        Your Name:
                        <input type="text" name="name" />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col m10 offset-m1 custom-input-field">
                      <label className="dark-blue-text fw-600">
                        Your Email:
                        <input type="email" name="email" />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col m10 offset-m1 custom-input-field">
                      <label className="dark-blue-text fw-600">
                        Message:
                        <textarea
                          id="message"
                          name="message"
                          className="materialize-textarea"
                        ></textarea>
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col m12">
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col m10 offset-m1">
                      <button
                        type="submit"
                        className="btn btn-portfolio right fw-600"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
