import React from 'react';
import { Provider } from 'react-redux';
import App from './App.js';
import utils from './utils';
import moox from 'moox';
import schema from './models/schema';
import PropTypes from 'prop-types';

export const JEditor = (props) => {
  if (props.lang) utils.lang = props.lang;
  const Model = moox({
    schema,
  });
  if (props.format) {
    Model.__jsonSchemaFormat = props.format;
  } else {
    Model.__jsonSchemaFormat = utils.format;
  }

  if (props.mock) {
    Model.__jsonSchemaMock = props.mock;
  }
  const store = Model.getStore();
  return (
    <Provider store={store} className="wrapper">
      <App Model={Model} {...props} />
    </Provider>
  );
};

JEditor.propTypes = {
  data: PropTypes.string,
  onChange: PropTypes.func,
  showEditor: PropTypes.bool,
};
