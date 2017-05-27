/* eslint-env mocha */

import assert from 'assert';
import {noop} from 'lodash';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TextField from './TextField';
import TextFieldAnimations from './TextFieldAnimations.css';

describe('TextField', () => {
  it('should shallow render', () => {
    const wrapper = shallow(
      <TextField
        label={'label'}
        onChange={noop}
        value={'value'}
      />
    );
    assert(wrapper);
  });

  it('should render a TextArea if multiline', () => {
    const wrapper = shallow(
      <TextField
        label={'label'}
        onChange={noop}
        value={'value'}
        multiline
      />
    );
    assert(wrapper.find('TextArea').length === 1);
  });

  it('should set the interal state to focused on focus', () => {
    const wrapper = mount(
      <TextField
        label={'label'}
        onChange={noop}
        value={''}
        placeholder={'placeholder'}
      />
    );
    wrapper.find('Input').simulate('focus');
    assert(wrapper.state('focused'));
    assert(wrapper.find('label').getDOMNode().style.animationName !== TextFieldAnimations.float);
  });

  it('should add the float animation on focus when there is no placeholder and value is empty', () => {
    const wrapper = mount(
      <TextField
        label={'label'}
        onChange={noop}
        value={''}
      />
    );
    wrapper.find('Input').simulate('focus');
    assert(wrapper.find('label').getDOMNode().style.animationName === TextFieldAnimations.float);
  });

  it('should set the interal state to not focused on blur', () => {
    const wrapper = mount(
      <TextField
        label={'label'}
        onChange={noop}
        value={''}
        placeholder={'placeholder'}
      />
    );
    wrapper.find('Input').simulate('blur');
    assert(!wrapper.state('focused'));
    assert(wrapper.find('label').getDOMNode().style.animationName !== TextFieldAnimations.sink);
  });

  it('should add the sink animation class on blur when there is no placeholder and value is empty', () => {
    const wrapper = mount(
      <TextField
        label={'label'}
        onChange={noop}
        value={''}
      />
    );
    wrapper.find('Input').simulate('blur');
    assert(!wrapper.state('focused'));
    assert(wrapper.find('label').getDOMNode().style.animationName === TextFieldAnimations.sink);
  });
});
