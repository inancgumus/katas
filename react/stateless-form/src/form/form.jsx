import React from 'react'

/*
 * This form automatically collects its inputs
 * Now, it only supports input fields
 */
const Form = props => {
  let details = {}

  const _onChange = e => {
    const { name, value } = e.target
    details[name] = value
  }

  const _onSubmit = e => {
    e.preventDefault()
    props.onSubmit(details)
  }

  return (
    <form onSubmit={ _onSubmit } onChange={ _onChange }>
      { props.children }
    </form>
  )
}

export default Form
