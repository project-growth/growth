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
    this.props.registerUser(values).then(() => {
      this.props.history.push('/');
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="container">
        <h1>{'Sign up'}</h1>
        <RegisterForm onSubmit={this.submit} />
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  ...state,
});


export default connect(mapStateToProps, { registerUser })(Register);
