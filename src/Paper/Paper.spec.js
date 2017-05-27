/* eslint-env mocha */

import assert from 'assert';
import Paper from './Paper';
import React from 'react';
import {shallow} from 'enzyme';

describe('Paper', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Paper />);
    assert(wrapper);
  });
});
