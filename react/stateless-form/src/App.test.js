import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { expectToMatchSnapshot } from './utils/testing'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders correctly', expectToMatchSnapshot(
  <App />
))
