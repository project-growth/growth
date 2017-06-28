import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { registerUser } from '../actions/user';

class Register extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.registerUser(values)
    .then(() => {
      if (this.props.loggedIn) {
        this.props.history.push('/');
      }
      return undefined;
    })
    .catch((err) => { throw err; });
  }
  render() {
    return (
      <div className="container">
        <h1>{'Sign up'}</h1>
        <RegisterForm onSubmit={this.submit} />
        <div>{(this.props.errorMessage) ? this.props.errorMessage : ''}</div>
        <div>
          {'Have an '}
          <Link to="/login">
            {'account'}
          </Link>
          {'?'}
        </div>
      </div>
    );
  }
}

Register.defaultProps = {
  errorMessage: null,
  loggedIn: null,
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  loggedIn: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({
  ...user,
});


export default connect(mapStateToProps, { registerUser })(Register);
