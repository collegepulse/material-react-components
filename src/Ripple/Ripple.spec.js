/* eslint-env mocha */

import assert from 'assert';
import {createShallow} from '../../test/utils';
import React from 'react';
import Ripple from './Ripple';

describe('Ripple', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<Ripple />);
    assert(wrapper);
  });
});
