/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount, createTest} from '../../test/utils';
import List from './List';
import ListItem from './ListItem';
import keycode from 'keycode';
import React from 'react';

describe('List', () => {
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
    const wrapper = shallow(<List />);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<List />);
    assert(wrapper);
  });

  it('should support arrow key navigation with arrowNavigation prop', createTest(() => {
    const component = (
      <List arrowNavigation>
        <ListItem id="first" primary={'First List Item'} />
        <ListItem id="second" primary={'Second List Item'} />
      </List>
    );
    const wrapper = mount(component);

    wrapper.find('#first button').node.focus();

    setTimeout(() => {
      wrapper.find('#first button').simulate('keyDown', {keyCode: keycode('down')});
      assert(document.activeElement === wrapper.find('#second button').node);
    }, 250);

    setTimeout(() => {
      wrapper.find('#second button').simulate('keyDown', {keyCode: keycode('up')});
      assert(document.activeElement === wrapper.find('#first button').node);
    }, 750);
  }));
});
