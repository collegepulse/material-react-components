/* eslint-env mocha */

import AppBar from './AppBar';
import {createShallow, createMount} from '../../test/utils';
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

  it('should deep render', () => {
    const wrapper = mount(<AppBar />);
    assert(wrapper);
  });

  it('should deep render primary and secondary', () => {
    const wrapper = mount(<AppBar primary={'X'} secondary={'X'} />);
    assert(wrapper);
  });
});
