import React from "react";
import { navigateTo } from "gatsby-link";
import BannerImage from '../components/BannerImage';
import styled from "styled-components";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}
const Wrapper = styled.div`
  max-width: var(--maxwidth);
  background-color: yellow;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background-color: pink;
`;

const InputLabel = styled.label`

`;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <BannerImage 
          heading='Contact'
          tagline='Get in touch with me...'
          image={ this.props.data.bannerImage }
          alt="Sydney harbour banner image"
        />
        <Wrapper>
          <ContactForm
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
        
          <input type="hidden" name="form-name" value="contact" />
            <label hidden>
              <input name="bot-field" onChange={this.handleChange} />
            </label>

            <label htmlFor="name">Your name:</label>
            <input type="text" name="name" onChange={this.handleChange} />
            
      
            <InputLabel htmlFor="email">
              Your email:
              <input type="email" name="email" onChange={this.handleChange} />
            </InputLabel>
          
            <label>
              Message:
              <textarea name="message" onChange={this.handleChange} />
            </label>
          
            <button type="submit">Send</button>
          
          </ContactForm>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;

export const pageQuery = graphql`
   query bannerQuery {
    bannerImage: imageSharp(id: { regex: "/harbour/" }) {
      sizes(maxHeight: 360 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;