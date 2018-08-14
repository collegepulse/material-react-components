/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {createShallow, createMount} from '../../test/utils';
import Tab from './Tab';

describe('Tab', () => {
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
    const wrapper = shallow(<Tab/>);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<Tab/>);
    assert(wrapper);
  });
});
