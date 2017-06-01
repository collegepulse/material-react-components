/* eslint-env mocha */

import AppBar from './AppBar';
import assert from 'assert';
import React from 'react';
import {mount, shallow} from 'enzyme';

describe('Appbar', () => {
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
