/* eslint-env mocha */

import assert from 'assert';
import List from './List';
import {mount, shallow} from 'enzyme';
import React from 'react';
import {unmountComponentAtNode} from 'react-dom';

describe('List', () => {
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
    const wrapper = shallow(<List />, {attachTo: element});
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<List />, {attachTo: element});
    assert(wrapper);
  });
});
