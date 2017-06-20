import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

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

const RegisterForm = props => (
  <form>
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
    <button
      type="submit"
      disabled={enableSubmit(props)}
      style={{ borderRadius: '0' }}
    >Submit</button>
  </form>

  );
const newForm = reduxForm({
  form: 'register',
})(RegisterForm);

export default newForm;
