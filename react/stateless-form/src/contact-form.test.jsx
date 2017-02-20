import React from 'react'
import ReactDOM from 'react-dom'
import { expectToMatchSnapshot } from './utils/testing'

import { Form, TextField } from './form/'
import ContactForm from './contact-form.jsx'

it('renders correctly', expectToMatchSnapshot(
  <ContactForm />
))

it('gets the correct details on submit', () => {
})
