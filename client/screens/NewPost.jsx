import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostingForm from '../components/postingForm';
import { createPost } from '../actions/posting';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    const params = { ...values, user: this.props.user, createdAt: new Date() };
    this.props.createPost(params).then((response) => {
      console.log(response);
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="container">
        <h1>{'New Post'}</h1>
        <PostingForm onSubmit={this.submit} />
        <Link to="/">{'Back to Profile'}</Link>
      </div>
    );
  }
}
NewPost.defaultProps = {
  user: null,
};
NewPost.propTypes = {
  createPost: PropTypes.func.isRequired,
  user: PropTypes.string,
};

const mapStateToProps = ({ user }) => ({
  ...user,
});

export default connect(mapStateToProps, { createPost })(NewPost);
