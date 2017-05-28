/* eslint-env mocha */

import assert from 'assert';
import {shallow, mount} from 'enzyme';
import React from 'react';
import Tab from './Tab';

describe('Tab', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Tab />);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<Tab />);
    assert(wrapper);
  });
});
