/* eslint-env mocha */

import assert from 'assert';
import List from './List';
import ListItem from './ListItem';
import {mount, shallow} from 'enzyme';
import keycode from 'keycode';
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
    element.parentNode.removeChild(element);
  });

  it('should shallow render', () => {
    const wrapper = shallow(<List />, {attachTo: element});
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<List />, {attachTo: element});
    assert(wrapper);
  });

  it('should support arrow key navigation with arrowNavigation prop', () => {
    const component = (
      <List arrowNavigation>
        <ListItem id="first" primary={'First List Item'} />
        <ListItem id="second" primary={'First List Item'} />
      </List>
    );
    const wrapper = mount(component, {attachTo: element});
    wrapper.find('#first').simulate('keyDown', {keyCode: keycode('down')});
    assert(document.activeElement === wrapper.find('#second').node);
    wrapper.find('#second').simulate('keyDown', {keyCode: keycode('up')});
    assert(document.activeElement === wrapper.find('#first').node);
  });
});
