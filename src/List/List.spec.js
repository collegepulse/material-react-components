/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount} from '../../test/utils';
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

  it('should support arrow key navigation with arrowNavigation prop', () => {
    const component = (
      <List arrowNavigation>
        <ListItem id="first" primary={'First List Item'} />
        <ListItem id="second" primary={'First List Item'} />
      </List>
    );
    const wrapper = mount(component);
    wrapper.find('#first').simulate('keyDown', {keyCode: keycode('down')});
    assert(document.activeElement === wrapper.find('#second').node);
    wrapper.find('#second').simulate('keyDown', {keyCode: keycode('up')});
    assert(document.activeElement === wrapper.find('#first').node);
  });
});
