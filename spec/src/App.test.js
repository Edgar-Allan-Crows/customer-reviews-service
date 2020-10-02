import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/App.jsx';

const wrapper = shallow(<App />)

// describe('First React component test with Enzyme', () => {
//   it('App renders without crashing', () => {
//      shallow(<App />);
//    });
// });