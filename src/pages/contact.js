import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Recaptcha from 'react-google-recaptcha';
import Device from '../assets/styles/mediaQueries';
import Layout from '../components/Layout/Layout';
import Modal from '../components/UI/Modal/Modal';
import BannerImage from '../components/BannerImage/BannerImage';
import { formFields } from '../assets/helpers/appHelpers';

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const Wrapper = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
`;
const ValidationTitle = styled.h4`
  margin: 0 0 1rem 0;
  text-align: center;
  color: var(--headinggrey);
`;

const ValidationList = styled.ul`
  margin:0
`;

const ValidationBullet = styled.li`
  color: var(--navbargrey);
  padding: 0.5rem;
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
  }
`;

const InputLabel = styled.label`
  display: block;
  color: var(--navbargrey);
  font-family: arial, sans-serif;
  @media ${Device.tablet} {
    margin: 0 1rem;
  }
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
  padding: 0 2px;
  border: 1px solid var(--navbargrey);
`;

const MessageLabel = styled(InputLabel)`
  grid-column: 1 / span 2;
  @media ${Device.tablet} {
    grid-column: 1 / span 1;
  }
`;

const MessageText = styled.textarea`
  ${inputStyles}
  height: 6.5rem;
  padding: 0 2px;
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
  @media ${Device.tablet} {
    margin: 0;
    width: 302px;
    justify-self: center;
  }
  
`;

function validateField(targetFieldName, field=' ', regex) {
  // Get the field name from the string for the React key
  const [htmlField] = targetFieldName.split(' ');
  return regex.test(field.trim())
    ? null
    : { field: htmlField, message: `Please enter A valid ${targetFieldName}` };
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.ref ='recaptcha';
    this.state = {
      message: '',
      hasValidationErrors: false,
      errorMessages: {
        title: '',
        errors: [],
      },
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRecaptcha = (value) => {
    this.setState({ gRecaptchaResponse: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.isValidInput()) { return; } // Don't submit if not filled in
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
        /* Netlify Google-recaptcha backend broken. If it is fixed it expects an attribute
        in state called g-recaptcha-response */
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => {
        this.setState({
          errorMessages: {
            hasValidationErrors: true,
            title: 'Submittng Form Failed.',
            errors: [
              { field: 'general', message: 'Somthing has gone wrong with submiting the form. Your message was not sent, please try emailing me instead.' },
            ],
          },
        });
      });
  }

  toggleModalVisible = () => {
    this.setState(prevState => ({ hasValidationErrors: !prevState.hasValidationErrors }));
  }

  isValidInput() {
    const errors = [];
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const nameRegex = /^([a-zA-Z\-'"]){3,30}$/;
    const {
      message, firstName, lastName, gRecaptchaResponse, email,
    } = this.state;
    const hasInvalidFirstName = () => validateField('first name (only letters A-z, "\'" and "-")', firstName, nameRegex);
    const hasInvalidLastName = () => validateField('last name (only letters A-z, "\'" and "-")', lastName, nameRegex);
    const hasInvalidEmail = () => validateField('email', email, emailRegex);
    if (hasInvalidFirstName()) errors.push(hasInvalidFirstName());
    if (hasInvalidLastName()) errors.push(hasInvalidLastName());
    if (hasInvalidEmail()) errors.push(hasInvalidEmail());
    if (message.trim().length < 9) errors.push({ field: 'message', message: 'Please enter a message of 10 of more characters' });
    if (!gRecaptchaResponse) errors.push({ field: 'recaptcha', message: 'Please check the Recaptcha field' });
    const hasValidationErrors = (errors.length > 0);
    this.setState({
      hasValidationErrors,
      errorMessages: {
        errors,
        title: 'Please Correct the following errors:',
      },

    });
    return !hasValidationErrors;
  }


  render() {
    const { hasValidationErrors, errorMessages: { errors: stateErrors, title } } = this.state;
    let errors = null;
    if (hasValidationErrors) {
      errors = (
        <React.Fragment>
          <ValidationTitle>
            {title}
          </ValidationTitle>
          <ValidationList>
            {stateErrors.map(error => (
              <ValidationBullet key={error.field}>
                {error.message}
              </ValidationBullet>
            ))}
          </ValidationList>
        </React.Fragment>
      );
    }
    return (
      <Layout>
        <BannerImage
          heading="Contact"
          tagline="Get in touch with me..."
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
            <label hidden htmlFor="bot-name">
              <input name="bot-field" onChange={this.handleChange} />
            </label>

            {formFields.map(field => (
              <InputLabel htmlFor={field.name} key={field.name}>
                { field.label }
                { field.mandatory ? (
                  <Mandatory>
                    *
                  </Mandatory>
                ) : null }
                <FormInput
                  type={field.type}
                  name={field.name}
                  onChange={this.handleChange}
                />
              </InputLabel>
            ))}
            <MessageLabel>
              Message:
              <Mandatory>
                *
              </Mandatory>
              <MessageText name="message" onChange={this.handleChange} />
            </MessageLabel>
            <Recaptcha
              style={{ justifySelf: 'center' }}
              ref={this.ref}
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
              data-size="compact"
            />
            <SendButton type="submit">
              Send
            </SendButton>
          </ContactForm>
        </Wrapper>
        <Modal
          show={hasValidationErrors}
          modalClosed={this.toggleModalVisible}
        >
          {errors}
        </Modal>
      </Layout>
    );
  }
}

export default Contact;
/* eslint max-len: "off" */
