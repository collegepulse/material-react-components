/* eslint-env mocha */

import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import assert from 'assert';
import SvgWrapper from './SvgWrapper';
import {mount, shallow} from 'enzyme';
import React from 'react';
import {unmountComponentAtNode} from 'react-dom';

describe('SvgWrapper', () => {
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
    const wrapper = shallow(<SvgWrapper />, {attachTo: element});
    assert(wrapper);
  });

  it('should accept an SVG as a component', () => {
    const wrapper = mount(<SvgWrapper component={Add} />, {attachTo: element});
    assert(wrapper.find(Add).length === 1);
    assert(!wrapper.find(Add).props().focusable);
  });
});
