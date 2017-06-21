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
    this.props.loginUser(values).then(() => {
      this.props.history.push('/');
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="container">
        <h1>Log In</h1>
        <LoginForm onSubmit={this.submit} />
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps, { loginUser })(Login);
