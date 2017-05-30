/* eslint-env mocha */

import assert from 'assert';
import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import ListItem from './ListItem';
import {mount, shallow} from 'enzyme';
import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import React from 'react';
import Styles from './ListItem.css';
import {unmountComponentAtNode} from 'react-dom';

describe('ListItem', () => {
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
    const wrapper = shallow(<ListItem />, {attachTo: element});
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<ListItem />, {attachTo: element});
    assert(wrapper);
  });

  it('should render with just a primary label', () => {
    const wrapper = mount(
      <ListItem
        primary="primary"
      />,
      {attachTo: element}
    );
    assert(wrapper.find(`.${Styles.text}`).length === 1);
  });

  it('should render with a primary and secondary label', () => {
    const wrapper = mount(
      <ListItem
        primary="primary"
        secondary="secondary"
      />,
      {attachTo: element}
    );
    assert(wrapper.find(`.${Styles.text}`).length === 1);
  });

  it('should render with an avatar, primary + secondary label', () => {
    const wrapper = mount(
      <ListItem
        avatar={<Folder />}
        primary="primary"
        secondary="secondary"
      />,
      {attachTo: element}
    );
    assert(wrapper.find(`.${Styles.avatar}`).length === 1);
  });

  it('should render with an avatar, primary + secondary labels, + an action', () => {
    const wrapper = mount(
      <ListItem
        avatar={<Folder />}
        primary="primary"
        secondary="secondary"
        action={<MoreVert />}
      />,
      {attachTo: element}
    );
    assert(wrapper.find(`.${Styles.action}`).length === 1);
  });
});
