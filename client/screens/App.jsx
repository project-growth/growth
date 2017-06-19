import React from 'react';
import { connect } from 'react-redux';

const App = () => (
  <form>
    <button
      href="/register"
      label="Register"
    />
    <button
      href="/login"
      label="Log In"
    />
  </form>
);

export default connect(null, null)(App);
