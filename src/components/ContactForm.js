import React from "react"
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

const ContactForm = (props) => (
  <div 
    id="contact-form-container"
    className={props.className}
    >
    <NetlifyForm
      name='Contact'
      action='/thanks'
      honeypotName='bot-field'
      onSuccess={(response, context) => {
        console.log('Successfully sent form data to Netlify Server')
        context.formRef.current.reset()
      }}
    >
    {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && (
          <div id="success-message">
            <p>Thanks for contacting us!</p>
          </div>
        )}
        {error && (
          <div id="error=message">
            <p>
              Sorry, we could not reach servers. Because it only works on Netlify,
              our GitHub demo does not provide a response.
            </p>
          </div>
        )}
        <div id="first-name">
          <input
            type='text'
            name='first_name'
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>
        <div id="last-name">
          <input
            type='text'
            name='last_name'
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='email'
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='subject'
            placeholder="Subject"
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            type='text'
            name='message'
            id='message'
            placeholder='Message'
            rows='6'
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'>
            Submit
          </button>
        </div>
      </>
    )}
    </NetlifyForm>
  </div>
);

export default ContactForm;