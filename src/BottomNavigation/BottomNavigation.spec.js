/* eslint-env mocha */

import {createShallow} from '../../test/utils';
import BottomNavigation from './BottomNavigation';
import assert from 'assert';
import React from 'react';

describe('BottomNavigation', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<BottomNavigation />);
    assert(wrapper);
  });
});
