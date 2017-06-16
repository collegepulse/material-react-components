/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount} from '../../test/utils';
import keycode from 'keycode';
import noop from 'lodash';
import React from 'react';
import Styles from './Switch.css';
import Switch from './Switch';

describe('Switch', () => {
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
    const wrapper = shallow(<Switch onChange={noop} />);
    assert(wrapper);
  });

  it('should set keyboardFocused state to true on tab press', () => {
    const wrapper = mount(<Switch onChange={noop} />);
    wrapper.simulate('mouseup');
    wrapper.find('input').simulate('keyUp', {keyCode: keycode('tab')});
    assert(wrapper.state('keyboardFocused'));
  });

  it('should set keyboardFocused state to true on space press', () => {
    const wrapper = mount(<Switch onChange={noop} />);
    wrapper.simulate('mouseup');
    wrapper.find('input').simulate('keyUp', {keyCode: keycode('space')});
    assert(wrapper.state('keyboardFocused'));
  });

  it('should set keyboardFocused state to false when blurred', () => {
    const wrapper = mount(<Switch onChange={noop} />);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    assert(!wrapper.state('keyboardFocused'));
  });

  it('should use custom color when checked', () => {
    const wrapper = mount(<Switch checked readOnly primaryColor={'rgb(255, 255, 255)'} onChange={noop} />);
    assert(wrapper.find(`.${Styles.track}`).getDOMNode().style.backgroundColor === 'rgb(255, 255, 255)');
  });
});
