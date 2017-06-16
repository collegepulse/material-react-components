/* eslint-env mocha */

import assert from 'assert';
import {createMount} from '../../test/utils';
import DOMBodyRender from './DOMBodyRender';
import React from 'react';

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
    const wrapper = mount(
      <DOMBodyRender>
        <div>{text}</div>
      </DOMBodyRender>
    );
    const node = wrapper.instance().node;
    assert(node.innerHTML.indexOf(text) > -1);
  });

  it('should update DOM when children change', () => {
    const oldText = 'Hello, World!';
    const wrapper = mount(
      <DOMBodyRender>
        <div>{oldText}</div>
      </DOMBodyRender>
    );
    const node = wrapper.instance().node;
    assert(node.innerHTML.indexOf(oldText) > -1);
    const newText = 'New content';
    wrapper.setProps({children: <div>{newText}</div>});
    assert(node.innerHTML.indexOf(oldText) === -1);
    assert(node.innerHTML.indexOf(newText) > -1);
  });
});
