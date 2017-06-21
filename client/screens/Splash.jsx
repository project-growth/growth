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
        <div>
          <div>made it</div>
          <button onClick={this.props.logoutUser}>log out</button>
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
};
Splash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};
const mapStateToProps = ({ user }) => ({ ...user });
export default connect(mapStateToProps, { logoutUser })(Splash);
