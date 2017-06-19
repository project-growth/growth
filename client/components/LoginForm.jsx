import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form inline onSubmit={handleSubmit}>
      <Field
        name="Email"
        component="input"
        type="text"
        placeholder="email"
      />
      <Field
        name="Password"
        component="input"
        type="text"
        placeholder="password"
      />
      <button
        type="submit"
        disabled={enableSubmit(this.props)}
        style={{ borderRadius: '0' }}
      >Submit</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
const Form = reduxForm({
  form: 'search',
})(LoginForm);
const mapStateToProps = ({ form: { search } }) => ({
  search,
});

export default connect(mapStateToProps, null)(Form);
