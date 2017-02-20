import React from 'react'

const TextField = ({ title, field, defaultValue = '' }) => (
  <p>
    <label style={{
      textTransform: "capitalize",
      marginRight: 10
    }}>
      { title }:
    </label>

    <input
      type="text"
      name={ field }
      defaultValue={ defaultValue }
    />
  </p>
)

export default TextField
