/* eslint-env mocha */

import assert from 'assert';
import Input from './Input';
import React from 'react';
import {shallow} from 'enzyme';

describe('Input', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Input />);
    assert(wrapper);
  });
});
