import React from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

class Contact extends React.Component {
  state = {}

  handleRecaptcha = value => this.setState({ "g-recaptcha-response": value })

  handleSubmit = e => {
      e.preventDefault()
      const form = e.target

      if(!e.target.name.value || !e.target.email.value || !e.target.message.value) {
          return alert('Please fill in all the required fields :)')
      } else {
          fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
              })
            })
              .then(() => navigateTo(form.getAttribute("action")))
              .catch(error => alert('Something went wrong, please try again!'))
          e.target.name.value = ''
          e.target.email.value = ''
          e.target.message.value = ''
      }
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
      const { name, email, message } = this.state
      return (
          <div>
              <div>
                  <h4>Feel free to email me via <a href="mailto:rhysbrooker01@gmail.com" target="_top">ismai23l@hotmail.com</a></h4>
                  <p>Or fill in the contact form and submit it!</p>
                  <form
                      action="/about"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-recaptcha="true"
                      onSubmit={this.handleSubmit}>
                      <noscript>
                          <p>This form won’t work with Javascript disabled</p>
                      </noscript>
                      <p>
                          <label>
                          Your full name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                          </label>
                      </p>
                      <p>
                          <label>
                          Your email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                          </label>
                      </p>
                      <p>
                          <label>
                          Message: <textarea name="message" value={message} onChange={this.handleChange} />
                          </label>
                      </p>
                      <Recaptcha
                          ref="recaptcha"
                          sitekey={RECAPTCHA_KEY}
                          onChange={this.handleRecaptcha}
                      />
                      <p>
                          <button type="submit">Send</button>
                      </p>
                  </form>
              </div>
          </div>
      )
  }
}

export default Contact;