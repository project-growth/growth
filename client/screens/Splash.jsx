import React from 'react';
import { connect } from 'react-redux';

const Splash = (props) => {
  console.log('splash', props);
  return (
    <form>
      <button
        onClick={() => { props.history.push('/register'); }}
        label="Register"
      />
      <button
        onClick={() => { props.history.push('/login'); }}
        label="Log In"
      />
    </form>
  );
};

export default connect(null, null)(Splash);
