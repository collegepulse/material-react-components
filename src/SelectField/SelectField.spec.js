/* eslint-env mocha */

import assert from 'assert';
import {createShallow} from '../../test/utils';
import React from 'react';
import SelectField from './SelectField';

describe('SelectField', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  afterEach(() => {
    shallow.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<SelectField label="test" />);
    assert(wrapper);
  });
});
