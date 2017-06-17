/* eslint-env mocha */

import AppBar from './AppBar';
import {createShallow, createMount, createTest} from '../../test/utils';
import assert from 'assert';
import React from 'react';

describe('Appbar', () => {
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
    const wrapper = shallow(<AppBar />);
    assert(wrapper);
  });

  it('should deep render primary', createTest(() => {
    const wrapper = mount(<AppBar primary="X" />);
    assert(wrapper);
  }));

  it('should deep render children', createTest(() => {
    const wrapper = mount(<AppBar>Header</AppBar>);
    assert(wrapper);
  }));
});
