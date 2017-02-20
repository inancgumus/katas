import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import ContactForm from './contact-form';

class App extends Component {
  formOnChange(details) {
    console.log('details: ', details);
  }

  render() {
    return (
      <MuiThemeProvider>
        <ContactForm onSubmit={ this.formOnChange.bind(this) }/>
      </MuiThemeProvider>
    );
  }
}

export default App;
