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
import Recaptcha from "react-google-recaptcha"
if (typeof window !== "undefined") {
  require("materialize-css/dist/js/materialize.min.js")
}

// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
// https://github.com/sw-yx/gatsby-netlify-form-example-v2

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

class Contact extends Component {
  constructor() {
    super()
    typeof document !== `undefined`
      ? document.body.classList.add("bg-gray")
      : null
    const recaptchaRef = React.createRef()
  }
  state = {
    name: "",
    email: "",
    message: "",
  }

  componentDidUpdate = (prevProps, prevState) => {
    let message = document.getElementById("message")
    M.textareaAutoResize(message)
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = (e, history) => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <div>
        <Head title="Contact" />
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
                  onSubmit={this.handleSubmit}
                  action="/thanks"
                >
                  <input type="hidden" name="form-name" value="contact" />
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
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col m10 offset-m1 custom-input-field">
                      <label className="dark-blue-text fw-600">
                        Your Email:
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}
                        />
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
                          value={message}
                          onChange={this.handleChange}
                        ></textarea>
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col m10 offset-m1 custom-input-field">
                      <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
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

export default Contact
