import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/post';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {
    const id = this.props.location.pathname.slice(6);
    this.props.fetchPost(id);
  }
  render() {
    return (
      <div />
    );
  }
}

ViewPost.defaultProps = {

};

ViewPost.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ post }) => ({
  ...post,
});


export default connect(mapStateToProps, { fetchPost })(ViewPost);
