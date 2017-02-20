import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => (
  <RaisedButton {...props}></RaisedButton>
)

Button.propTypes = {
  onClick: React.PropTypes.func
}


export default Button;
