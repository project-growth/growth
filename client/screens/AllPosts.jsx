import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/post';

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
    };
  }
  componentDidMount() {
    this.props.getPosts().then(() => {
      this.setState({ fetched: true });
    });
  }
  render() {
    if (!this.state.fetched) {
      return (
        <div>
          {'loading...'}
        </div>
      );
    }
    return (
      <div>
        {'fetched'}
      </div>
    );
  }
}

AllPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = post => ({
  ...post,
});


export default connect(mapStateToProps, { getPosts })(AllPosts);
