/* eslint-env mocha */

import assert from 'assert';
import {shallow, mount} from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Styles from './Tabs.css';
import Tabs, {Tab} from './index';
import {unmountComponentAtNode} from 'react-dom';

describe('Tabs', () => {
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
    const wrapper = shallow(<Tabs />);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<Tabs />);
    assert(wrapper);
  });

  it('should call onChange function with new index when a tab is clicked', () => {
    const onChange = sinon.spy();
    const wrapper = mount(
      <Tabs index={0} onChange={onChange}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>
    );
    assert(wrapper);
    const newIndex = 2;
    wrapper.find('button').at(newIndex).simulate('click');
    assert(onChange.calledOnce);
    // second parameter should be index
    assert(onChange.args[0][1] === newIndex);
  });

  it('should repaint the inkbar when the index changes', () => {
    const wrapper = mount(
      <Tabs index={0} onChange={() => {}}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>,
      {attachTo: element}
    );
    const oldLeft = parseInt(wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left, 10);
    wrapper.setProps({index: 1});
    const newLeft = parseInt(wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left, 10);
    assert(oldLeft !== newLeft);
  });

  it('should repaint the inkbar on window resize', () => {
    const wrapper = mount(
      <Tabs index={1} onChange={() => {}}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>,
      {attachTo: element}
    );
    const beginLeftOffset = wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left;
    wrapper.getDOMNode().style.width = '400px';
    window.dispatchEvent(new Event('resize'));
    const endLeftOffset = wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left;
    assert(parseInt(beginLeftOffset, 10) > parseInt(endLeftOffset, 10));
  });
});
