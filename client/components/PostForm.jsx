import React from 'react';
import { Field, reduxForm } from 'redux-form';

const postForm = ({ handleSubmit, pristine, submitting, reset }) => (
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">{'title'}</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="job heading"
            />
          </div>
        </div>
        <div>
          <label htmlFor="body">{'job description'}</label>
          <div>
            <Field
              name="body"
              component="input"
              type="text"
              placeholder="enter job description..."
            />
          </div>
        </div>
        <div>
          <label htmlFor="price">{'Enter price in USD'}</label>
          <div>
            <Field
              name="price"
              component="input"
              type="number"
              placeholder="enter job description..."
            />
          </div>
        </div>
        <div>
          <label htmlFor="location">{'job location'}</label>
          <div>
            <Field
              name="body"
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
