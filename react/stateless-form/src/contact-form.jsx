import React from 'react'
import { Form, TextField } from './form/'

const ContactForm = ({ onSubmit }) => (
  <Form onSubmit={ onSubmit }>
    <TextField title="Your name" field="name" />
    <TextField title="Your lastname" field="lastname" />
    <TextField title="Your email" field="email" />

    <input type="submit" value="Submit" />
    <input type="reset" value="Clear" />
  </Form>
)

export default ContactForm
