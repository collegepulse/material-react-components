/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {createShallow} from '../../test/utils';
import BottomNavigationItem from './BottomNavigationItem';

describe('BottomNavigationItem', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<BottomNavigationItem/>);
    assert(wrapper);
  });
});
