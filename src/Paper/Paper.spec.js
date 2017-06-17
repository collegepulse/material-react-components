/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount, createTest} from '../../test/utils';
import Paper from './Paper';
import React from 'react';

describe('Paper', () => {
  let shallow;
  let mount;

  beforeEach(() => {
    shallow = createShallow();
    mount = createMount();
  });

  afterEach(() => {
    shallow.cleanUp();
    mount.cleanUp();
  });

  it('should shallow render', () => {
    const wrapper = shallow(<Paper />);
    assert(wrapper);
  });

  it('should deep render', createTest(() => {
    mount(<Paper elevation={25}>Paper!!!</Paper>);
  }));
});
