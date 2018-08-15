/* eslint-env mocha */

import assert from 'assert';
import keycode from 'keycode';
import noop from 'lodash';
import React from 'react';
import {createShallow, createMount, createTest} from '../../test/utils';
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
    const wrapper = shallow(<Switch onChange={noop}/>);
    assert(wrapper);
  });

  it('should animate when checked', createTest(() => {
    const wrapper = mount(<Switch onChange={noop}/>);
    setTimeout(() => {
      wrapper.setProps({checked: true});
    }, 500);
  }));

  it('should set keyboardFocused state to true on tab press', createTest(() => {
    const wrapper = mount(<Switch onChange={noop}/>);
    wrapper.simulate('mouseup');
    wrapper.find('input').simulate('keyUp', {keyCode: keycode('tab')});
    assert(wrapper.state('keyboardFocused'));
  }));

  it('should set keyboardFocused state to true on space press', createTest(() => {
    const wrapper = mount(<Switch onChange={noop}/>);
    wrapper.simulate('mouseup');
    wrapper.find('input').simulate('keyUp', {keyCode: keycode('space')});
    assert(wrapper.state('keyboardFocused'));
  }));

  it('should set keyboardFocused state to false when blurred', createTest(() => {
    const wrapper = mount(<Switch onChange={noop}/>);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    assert(!wrapper.state('keyboardFocused'));
  }));

  it('should use custom color when checked', createTest(() => {
    const wrapper = mount(<Switch checked readOnly primaryColor="rgb(255, 255, 255)" onChange={noop}/>);
    assert(wrapper.find(`.${Styles.track}`).getDOMNode().style.backgroundColor === 'rgb(255, 255, 255)');
  }));
});
