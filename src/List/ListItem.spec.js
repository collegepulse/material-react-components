/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount} from '../../test/utils';
import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import ListItem from './ListItem';
import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import React from 'react';
import Styles from './ListItem.css';

describe('ListItem', () => {
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
    const wrapper = shallow(<ListItem />);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<ListItem />);
    assert(wrapper);
  });

  it('should render with just a primary label', () => {
    const wrapper = mount(
      <ListItem
        primary="primary"
      />
    );
    assert(wrapper.find(`.${Styles.text}`).length === 1);
  });

  it('should render with a primary and secondary label', () => {
    const wrapper = mount(
      <ListItem
        primary="primary"
        secondary="secondary"
      />
    );
    assert(wrapper.find(`.${Styles.text}`).length === 1);
  });

  it('should render with an avatar, primary + secondary label', () => {
    const wrapper = mount(
      <ListItem
        avatar={<Folder />}
        primary="primary"
        secondary="secondary"
      />
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
      />
    );
    assert(wrapper.find(`.${Styles.action}`).length === 1);
  });
});
