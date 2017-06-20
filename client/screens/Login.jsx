import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    return (
      <LoginForm />
    );
  }
}

export default connect(null, null)(Login);
