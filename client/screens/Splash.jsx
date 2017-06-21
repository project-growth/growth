import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/user';

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="container">
          <Link to="/newpost">{'create new post'}</Link>
          <div>{'Hello user: '}{this.props.user}</div>
          <button onClick={this.props.logoutUser}>{'log out'}</button>
        </div>

      );
    }
    return (
      <form>
        <Link to="/register">
          {'Register'}
        </Link>

        <Link to="/login">
          {'Login'}
        </Link>
      </form>
    );
  }
}
Splash.defaultProps = {
  loggedIn: false,
  user: null,
};
Splash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
  user: PropTypes.string,
};
const mapStateToProps = ({ user }) => ({ ...user });
export default connect(mapStateToProps, { logoutUser })(Splash);
