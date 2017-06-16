/* eslint-env mocha */

import assert from 'assert';
import {createShallow} from '../../test/utils';
import Paper from './Paper';
import React from 'react';

describe('Paper', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<Paper />);
    assert(wrapper);
  });
});
