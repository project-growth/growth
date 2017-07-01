import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PlacesAutoComplete from 'react-places-autocomplete';

class postForm extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.onChange = address => this.setState({ address });
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, address, onChangeInput } = this.props;
    return (
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
              <label htmlFor="price">{'Enter hourly wage in USD'}</label>
              <div>
                <Field
                  name="price"
                  component="input"
                  type="number"
                  placeholder="enter hourly wage..."
                />
              </div>
            </div>
            <div>
              <label htmlFor="address">{'job location'}</label>
              <div>
                <Field
                  name="address"
                  component={PlacesAutoComplete}
                  inputProps={{
                    value: address,
                    onChange: onChangeInput,
                    name: 'address',
                    type: 'text',
                    placeholder: 'enter job location...',
                  }}
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
  }
}

export default reduxForm({
  form: 'postForm',
})(postForm);
