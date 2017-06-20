import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';

class Register extends Component {
  render() {
    return (
      <RegisterForm />
    );
  }
}

export default connect(null, null)(Register);
