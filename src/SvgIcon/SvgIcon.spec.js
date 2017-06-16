/* eslint-env mocha */

import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import assert from 'assert';
import {createMount} from '../../test/utils';
import SvgIcon from './SvgIcon';
import React from 'react';

describe('SvgIcon', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });


  it('should accept an SVG as a component', () => {
    const wrapper = mount(<SvgIcon component={Add} />);
    assert(wrapper.find(Add).length === 1);
    assert(!wrapper.find(Add).props().focusable);
  });
});
