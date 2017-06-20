import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div>{'finally made it '}</div>
    );
  }
}

export default connect(null, null)(Profile);
