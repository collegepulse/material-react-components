/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {createMount} from '../../test/utils';
import DOMBodyRender from './DOMBodyRender';

describe('DOMBodyRender', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should deep render', () => {
    const text = 'Foo bar';
    const component = (
      <DOMBodyRender>
        <div>{text}</div>
      </DOMBodyRender>
    );
    const wrapper = mount(component);
    const {node} = wrapper.instance();
    assert(node.innerHTML.indexOf(text) > -1);
  });

  it('should update DOM when children change', () => {
    const oldText = 'Hello, World!';
    const component = (
      <DOMBodyRender>
        <div>{oldText}</div>
      </DOMBodyRender>
    );
    const wrapper = mount(component);
    const {node} = wrapper.instance();
    assert(node.innerHTML.indexOf(oldText) > -1);
    const newText = 'New content';
    wrapper.setProps({children: <div>{newText}</div>});
    assert(node.innerHTML.indexOf(oldText) === -1);
    assert(node.innerHTML.indexOf(newText) > -1);
  });
});
