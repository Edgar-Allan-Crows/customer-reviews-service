import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/App.jsx';

import "babel-polyfill";

describe('First React component test with Enzyme', () => {
  it('App renders without crashing', () => {
     shallow(<App />);
   });
});