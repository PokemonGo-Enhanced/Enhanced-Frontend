import React, { PropTypes } from 'react';
import { Style } from 'radium';

const coreStyles = (theme) => ({
  html: {
    boxSizing: 'border-box'
  },
  'html, body': {
    margin: 0,
    padding: 0,
    height: '100%',
    fontFamily: 'Work Sans, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    ' -moz-osx-font-smoothing': 'grayscale',
    background: '#F5F5F5'
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit'
  },
  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:active, input:-webkit-autofill:focus': {
    boxShadow: '0 0 0 1000px white inset',
    backgroundClip: 'padding-box'
  },
  'span[type=button]': {
    '-webkit-appearance': 'initial'
  },
  'a, a:active, a:focus, a:visited': {
    color: 'black',
    textDecoration: 'none'
  },
  'a:hover': {
    textDecoration: 'none'
  },
  'span[type=button] a': {
    display: 'block'
  },
  '::-webkit-input-placeholder': {
    color: theme.palette.primary1Color
  },
  ':-moz-placeholder': {
    color: theme.palette.primary1Color
  },
  '::-moz-placeholder': {
    color: theme.palette.primary1Color
  },
  ':-ms-input-placeholder': {
    color: theme.palette.primary1Color
  }
});

const coreStylesElement = (props, { muiTheme }) => {
  return (
    <Style rules={coreStyles(muiTheme)} />
  );
};

coreStylesElement.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default coreStylesElement;
