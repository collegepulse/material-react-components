/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import Ripple from './Ripple';
import {shallow} from 'enzyme';

describe('Ripple', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Ripple />);
    assert(wrapper);
  });
});
