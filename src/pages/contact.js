import React from "react";
import { navigateTo } from "gatsby-link";
import BannerImage from '../components/BannerImage';
import styled from "styled-components";
import Device from '../assets/mediaqueries';
import Recaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;


function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
};

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 1.8rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 2rem;
  @media ${Device.tablet} {
    grid-template-columns: 1fr;
  };
`;

const labelStyles = `
  display: block;
  color: var(--navbargrey);
  font-family: arial, sans-serif;
`;

const InputLabel = styled.label`
  ${labelStyles}
`;

const Mandatory = styled.span`
  color: red;
  vertical-align: super;
  font-size: 0.7rem;
`;

const inputStyles = `
  display: block;
  margin-top: 0.4rem;
  width: 100%;
  font-size: 1rem;
  color: var(--headinggrey);
`;

const FormInput = styled.input`
  ${inputStyles}
  height: 1.5rem;
  padding: 0 10px;
  border: 1px solid var(--navbargrey);
`;

const MessageLabel = styled.label`
  ${labelStyles}
  grid-column: 1 / span 2;
`;

const MessageText = styled.textarea`
  ${inputStyles}
  height: 6.5rem;
  border: 1px solid black;
`;

const SendButton = styled.button`
  color: #fff;
  background-color: #000;
  margin-left: 2rem;
  border: none;
  border-radius: 3px;
  height: 1.7rem;
  align-self: center;
`;

function validateField(targetFieldName, field=' ', regex) {
  return regex.test(field.trim())
  ? ''
  : `Please enter A valid ${ targetFieldName } \n`;
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecaptcha = this.handleRecaptcha.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha (value) {
    this.setState({ "g-recaptcha-response": value });
  };

  isValidInput (message='') {
    let errors = '';
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const nameRegex = /^([a-zA-Z\-'"]){3,30}$/;
    errors += validateField("first name (only: A-z, ' and -)", this.state.firstName, nameRegex);
    errors += validateField("last name (only: A-z, ' and -)", this.state.lastName, nameRegex);
    errors += validateField("email", this.state.email, emailRegex);
    errors += message.trim().length > 9 ?
      '' :
      'Please enter a message of 10 of more characters \n'
    errors += this.state['g-recaptcha-response'] ? 
      '' :
      'Please enter the Recaptcha field \n';
    if (errors) alert(errors);
    return !errors;
  }

  handleSubmit (e) {
    e.preventDefault();
    if (!this.isValidInput(this.state.message)) {return} //don't submit if not filled in
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

            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <label hidden>
              <input name="bot-field" onChange={this.handleChange} />
            </label>

            {formFields.map( (field) => (
              <InputLabel htmlFor={ field.name } key={ field.name }>
                { field.label }
                { field.mandatory ? <Mandatory>*</Mandatory> : null }
                <FormInput 
                  type={ field.type } 
                  name={ field.name } 
                  onChange={this.handleChange}
                />
              </InputLabel>
            ))}
            <MessageLabel>
              Message: 
              <Mandatory>*</Mandatory>
              <MessageText name="message" onChange={this.handleChange} />
            </MessageLabel>
            <Recaptcha
                ref="recaptcha"
                sitekey={RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
                data-size="compact"
            />
            <SendButton type="submit">Send</SendButton>
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

const formFields = [
  {
    label: 'First Name:',
    type: 'name',
    name:'firstName',
    mandatory: true
  },
  {
    label: 'Last Name:',
    type: 'name',
    name:'lastName',
    mandatory: true
  },
  {
    label: 'Email:',
    type: 'text',
    name:'email',
    mandatory: true
  },
  {
    label: 'Phone Number:',
    type: 'tel',
    name:'phoneNumber',
    mandatory: false
  }
];