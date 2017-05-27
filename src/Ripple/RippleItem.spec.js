/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import RippleItem from './RippleItem';
import {shallow} from 'enzyme';

describe('RippleItem', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<RippleItem />);
    assert(wrapper);
  });
});
