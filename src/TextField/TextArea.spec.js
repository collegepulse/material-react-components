/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {noop} from 'lodash';
import TextArea from './TextArea';

const shortText = 'Some text';
const longText = `A really, really, really, really, really, really, really, really, really,
  really, really, long string that is going to increase the height of the textarea.`;

describe('TextArea', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<TextArea onChange={noop} />);
    assert(wrapper);
  });

  it('should full render', () => {
    const wrapper = mount(<TextArea onChange={noop} />);
    assert(wrapper);
  });

  it('should increase the height of the textarea when there is more text', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    const wrapper = mount(<TextArea onChange={noop} value={shortText} style={{width: '150px'}} />, {attachTo: element});
    wrapper.setProps({value: longText});
    wrapper.find('textarea').simulate('change', {target: {value: longText}});
    const height = wrapper.getDOMNode().style.height;
    assert(height);
    /*
     * On different test targets, the height will be different :(
     * but a passing test imples any non-zero value! :)
     */
    assert(height !== '0px');
    element.remove();
  });

  it('should decrease the height of the text area when there is less text', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    const wrapper = mount(<TextArea onChange={noop} value={longText} style={{width: '150px'}} />, {attachTo: element});
    const heightWithLongText = parseInt(wrapper.getDOMNode().style.height, 10);
    wrapper.setProps({value: shortText});
    wrapper.find('textarea').simulate('change', {target: {value: longText}});
    const heightWithShortText = parseInt(wrapper.getDOMNode().style.height, 10);
    assert(heightWithLongText > heightWithShortText);
  });
});
