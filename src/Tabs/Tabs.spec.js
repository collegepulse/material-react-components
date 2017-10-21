/* eslint-env mocha */

import assert from 'assert';
import {createMount, createTest} from '../../test/utils';
import React from 'react';
import sinon from 'sinon';
import Styles from './Tabs.css';
import Tabs, {Tab} from './index';

describe('Tabs', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should deep render', () => {
    const wrapper = mount(
      <Tabs>
        <Tab label="Foo" />
      </Tabs>
    );
    assert(wrapper);
  });

  it('should call onChange function with new index when a tab is clicked', createTest(() => {
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
  }));

  it('should repaint the indicator when the index changes', createTest(() => {
    const wrapper = mount(
      <Tabs index={0} onChange={() => {}}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>
    );

    const numberPattern = /\d+/g;
    wrapper.setProps({index: 2});

    setTimeout(() => {
      const node = wrapper.find(`.${Styles.indicator}`).getDOMNode();
      const newTransform = node.style.transform.match(numberPattern)[0];
      assert(newTransform !== 0);
    }, 100);
  }));

  it('should repaint the indicator on window resize', createTest(() => {
    const wrapper = mount(
      <Tabs index={1} onChange={() => {}}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>
    );

    const numberPattern = /\d+/g;
    wrapper.setProps({index: 2});

    setTimeout(() => {
      wrapper.getDOMNode().style.width = '200px';
    }, 400);

    setTimeout(() => {
      const event = document.createEvent('UIEvents');
      event.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(event);
    }, 700);

    setTimeout(() => {
      const node = wrapper.find(`.${Styles.indicator}`).getDOMNode();
      const endLeftOffset = node.style.transform.match(numberPattern)[0];
      assert(parseInt(endLeftOffset, 10) !== 0);
    }, 900);
  }));
});
