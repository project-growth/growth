import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../actions/user';


class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.loginUser(values)
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
        <h1>Log In</h1>
        <LoginForm onSubmit={this.submit} />
        <div>{(this.props.errorMessage) ? this.props.errorMessage : ''}</div>
        <div>{'Need an '}
          <Link to="/register">
            {'Account'}
          </Link>
          {'?'}
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  errorMessage: null,
  loggedIn: null,
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({
  ...user,
});


export default connect(mapStateToProps, { loginUser })(Login);
