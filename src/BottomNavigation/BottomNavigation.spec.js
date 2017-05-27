/* eslint-env mocha */

import BottomNavigation from './BottomNavigation';
import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';

describe('BottomNavigation', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<BottomNavigation />);
    assert(wrapper);
  });
});
