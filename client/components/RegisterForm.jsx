import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const enableSubmit = (props) => {
  if (props.search) {
    if (props.search.values) {
      if (Object.keys(props.search.values).length === 3) {
        return false;
      }
    }
  }
  return true;
};

const RegisterForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form inline onSubmit={handleSubmit}>
      <Field
        name="email"
        component="input"
        type="text"
        placeholder="Email"
      />
      <Field
        name="password"
        component="input"
        type="text"
        placeholder="Password"
      />
      <Field
        name="Password"
        component="input"
        type="text"
        placeholder="Re-enter password"
      />
      <button
        type="submit"
        disabled={enableSubmit(this.props)}
        style={{ borderRadius: '0' }}
      >Submit</button>
    </form>

  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
