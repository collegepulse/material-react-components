/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {createShallow, createMount, createTest} from '../../test/utils';
import AppBar from './AppBar';

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
    const wrapper = shallow(<AppBar/>);
    assert(wrapper);
  });

  it('should deep render primary', createTest(() => {
    const wrapper = mount(<AppBar primary="X"/>);
    assert(wrapper);
  }));

  it('should deep render children', createTest(() => {
    const wrapper = mount(<AppBar>Header</AppBar>);
    assert(wrapper);
  }));
});
