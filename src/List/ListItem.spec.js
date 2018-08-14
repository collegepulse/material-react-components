/* eslint-env mocha */

import assert from 'assert';
import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import React from 'react';
import {createShallow, createMount, createTest} from '../../test/utils';
import ListItem from './ListItem';
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
    const wrapper = shallow(<ListItem/>);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<ListItem/>);
    assert(wrapper);
  });

  it('should render with just a primary label', createTest(() => {
    const wrapper = mount(<ListItem
      primary="primary"
    />);
    assert(wrapper.find(`.${Styles.text}`).length === 1);
  }));

  it('should render with a primary and secondary label', createTest(() => {
    const wrapper = mount(<ListItem
      primary="primary"
      secondary="secondary"
    />);
    assert(wrapper.find(`.${Styles.text}`).length === 1);
  }));

  it('should render with an avatar, primary + secondary label', createTest(() => {
    const wrapper = mount(<ListItem
      avatar={<Folder/>}
      primary="primary"
      secondary="secondary"
    />);
    assert(wrapper.find(`.${Styles.avatar}`).length === 1);
  }));

  it('should render with an avatar, primary + secondary labels, + an action', createTest(() => {
    const wrapper = mount(<ListItem
      avatar={<Folder/>}
      primary="primary"
      secondary="secondary"
      action={<MoreVert/>}
    />);
    assert(wrapper.find(`.${Styles.action}`).length === 1);
  }));
});
