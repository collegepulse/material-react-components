/* eslint-env mocha */

import BottomNavigationItem from './BottomNavigationItem';
import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';

describe('BottomNavigationItem', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<BottomNavigationItem />);
    assert(wrapper);
  });
});
