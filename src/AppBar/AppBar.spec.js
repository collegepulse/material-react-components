/* eslint-env mocha */

import AppBar from './AppBar';
import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';

describe('Appbar', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<AppBar />);
    assert(wrapper);
  });
});
