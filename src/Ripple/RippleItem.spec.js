/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {createShallow} from '../../test/utils';
import RippleItem from './RippleItem';

describe('RippleItem', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<RippleItem/>);
    assert(wrapper);
  });
});
