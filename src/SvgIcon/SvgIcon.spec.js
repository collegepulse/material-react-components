/* eslint-env mocha */

import assert from 'assert';
import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import React from 'react';
import {createMount, createTest} from '../../test/utils';
import SvgIcon from './SvgIcon';

describe('SvgIcon', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should accept an SVG as a component', createTest(() => {
    const wrapper = mount(<SvgIcon component={Add}/>);
    assert(wrapper.find(Add).length === 1);
    assert(wrapper.find(Add).props().focusable === 'false');
  }));
});
