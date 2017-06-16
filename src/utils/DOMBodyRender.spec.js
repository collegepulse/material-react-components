/* eslint-env mocha */

import assert from 'assert';
import DOMBodyRender from './DOMBodyRender';
import React from 'react';
import {mount} from 'enzyme';
import {unmountComponentAtNode} from 'react-dom';

describe('DOMBodyRender', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    unmountComponentAtNode(element);
    element.parentNode.removeChild(element);
  });

  it('should deep render', () => {
    const text = 'Foo bar';
    const wrapper = mount(
      <DOMBodyRender>
        <div>{text}</div>
      </DOMBodyRender>,
      {attachTo: element}
    );
    const node = wrapper.instance().node;
    assert(node.innerHTML.indexOf(text) > -1);
  });

  it('should update DOM when children change', () => {
    const oldText = 'Hello, World!';
    const wrapper = mount(
      <DOMBodyRender>
        <div>{oldText}</div>
      </DOMBodyRender>,
      {attachTo: element}
    );
    const node = wrapper.instance().node;
    assert(node.innerHTML.indexOf(oldText) > -1);
    const newText = 'New content';
    wrapper.setProps({children: <div>{newText}</div>});
    assert(node.innerHTML.indexOf(oldText) === -1);
    assert(node.innerHTML.indexOf(newText) > -1);
  });
});
