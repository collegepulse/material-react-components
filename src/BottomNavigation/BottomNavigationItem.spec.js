/* eslint-env mocha */

import BottomNavigationItem from './BottomNavigationItem';
import {createShallow} from '../../test/utils';
import assert from 'assert';
import React from 'react';

describe('BottomNavigationItem', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<BottomNavigationItem />);
    assert(wrapper);
  });
});
