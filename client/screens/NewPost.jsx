import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { createPost, resetPost } from '../actions/post';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    const params = { ...values, email: this.props.email };
    this.props.createPost(params).then(() => {
      // success/fail modal
      this.props.resetPost();
    }).catch(err => console.error(err))
    .then(() => { this.props.history.push('/'); })
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="container">
        <h1>{'New Post'}</h1>
        <PostForm onSubmit={this.submit} />
        <Link to="/">{'Back to Profile'}</Link>
      </div>
    );
  }
}
NewPost.defaultProps = {
  email: null,
};
NewPost.propTypes = {
  createPost: PropTypes.func.isRequired,
  resetPost: PropTypes.func.isRequired,
  email: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({
  ...user,
});

export default connect(mapStateToProps, { createPost, resetPost })(NewPost);
