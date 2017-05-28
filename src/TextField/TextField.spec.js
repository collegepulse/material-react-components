/* eslint-env mocha */

import assert from 'assert';
import {noop} from 'lodash';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Styles from './TextField.css';
import TextField from './TextField';
import TextFieldAnimations from './TextFieldAnimations.css';
import {unmountComponentAtNode} from 'react-dom';

const shortText = 'Some text';
const longText = 'A really,\n really,\n really,\n really,\n really long string.';

describe('TextField', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
  });

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
    assert(wrapper.find('textarea').length === 2);
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
    wrapper.find('input').simulate('focus');
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
    wrapper.find('input').simulate('focus');
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
    wrapper.find('input').simulate('blur');
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
    wrapper.find('input').simulate('blur');
    assert(!wrapper.state('focused'));
    assert(wrapper.find('label').getDOMNode().style.animationName === TextFieldAnimations.sink);
  });

  it('should increase the height of the textarea when there is more text', () => {
    const wrapper = mount(
      <TextField
        label="foo"
        onChange={noop}
        value={shortText}
        style={{width: '150px'}}
        multiline
      />, {attachTo: element}
    );
    const textarea = wrapper.find(`.${Styles.textarea}`);
    const beginningHeight = parseInt(textarea.getDOMNode().style.height, 10);
    wrapper.setProps({value: longText});
    textarea.simulate('change', {target: {value: longText}});
    const height = parseInt(textarea.getDOMNode().style.height, 10);
    assert(beginningHeight < height);
  });

  it('should decrease the height of the textarea when there is less text', () => {
    const wrapper = mount(
      <TextField
        label="foo"
        onChange={noop}
        value={longText}
        style={{width: '150px'}}
        multiline
      />, {attachTo: element}
    );
    const textarea = wrapper.find(`.${Styles.textarea}`);
    const heightWithLongText = parseInt(textarea.getDOMNode().style.height, 10);
    wrapper.setProps({value: shortText});
    textarea.simulate('change', {target: {value: shortText}});
    const heightWithShortText = parseInt(textarea.getDOMNode().style.height, 10);
    assert(heightWithLongText > heightWithShortText);
  });
});
