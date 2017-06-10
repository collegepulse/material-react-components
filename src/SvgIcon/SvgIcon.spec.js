/* eslint-env mocha */

import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import assert from 'assert';
import SvgIcon from './SvgIcon';
import {mount} from 'enzyme';
import React from 'react';
import {unmountComponentAtNode} from 'react-dom';

describe('SvgIcon', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
  });

  it('should accept an SVG as a component', () => {
    const wrapper = mount(<SvgIcon component={Add} />, {attachTo: element});
    assert(wrapper.find(Add).length === 1);
    assert(!wrapper.find(Add).props().focusable);
  });
});
