import React from 'react';
import { Field, reduxForm } from 'redux-form';

const postForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="heading">{'heading'}</label>
          <div>
            <Field
              name="heading"
              component="input"
              type="text"
              placeholder="job heading"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">{'job description'}</label>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="enter job description..."
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
          >
            {'Submit'}
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            {'Clear Values'}
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'register',
})(postForm);