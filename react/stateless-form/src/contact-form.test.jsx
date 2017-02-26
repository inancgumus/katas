import React from 'react'
import ReactDOM from 'react-dom'
import { expectToMatchSnapshot } from './utils/testing'

import { Form, TextField } from './form/'
import ContactForm from './contact-form.jsx'

it('renders correctly', expectToMatchSnapshot(
  <ContactForm />
))

// functional test: should be separated
it('gets the correct details on submit', () => {
  const onSubmit = jest.fn()
  const form = mount(<ContactForm onSubmit={ onSubmit } />)

  inputSimulateChangeMulti([
    { wrapper: form, field: 'name', value: 'inanc' },
    { wrapper: form, field: 'lastname', value: 'gumus' },
    { wrapper: form, field: 'email', value: 'inanc@pixenka.com' }
  ])

  form.simulate('submit')

  expect(onSubmit).toBeCalledWith(
    { name: 'inanc', lastname: 'gumus', email: 'inanc@pixenka.com' }
  )
})

// helpers
const inputSimulateChangeMulti = els => els.forEach(
  el => inputSimulateChange(el))

const inputSimulateChange = ({ wrapper, field, value }) => {
  wrapper.find(`input[name="${ field }"]`)
         .first()
         .simulate('change', {
           target: { name: field, value }
         })
}
