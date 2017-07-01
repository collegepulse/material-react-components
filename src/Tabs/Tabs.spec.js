/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount, createTest} from '../../test/utils';
import React from 'react';
import sinon from 'sinon';
import Styles from './Tabs.css';
import Tabs, {Tab} from './index';

describe('Tabs', () => {
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
    const wrapper = shallow(<Tabs />);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<Tabs />);
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

  it('should repaint the inkbar when the index changes', createTest(() => {
    const wrapper = mount(
      <Tabs index={0} onChange={() => {}}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>
    );
    const oldLeft = parseInt(wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left, 10);
    wrapper.setProps({index: 1});

    setTimeout(() => {
      const newLeft = parseInt(wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left, 10);
      assert(oldLeft !== newLeft);
    }, 100);
  }));

  it('should repaint the inkbar on window resize', createTest(() => {
    const wrapper = mount(
      <Tabs index={1} onChange={() => {}}>
        <Tab label="foo" />
        <Tab label="bar" />
        <Tab label="baz" />
      </Tabs>
    );
    const beginLeftOffset = wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left;
    wrapper.getDOMNode().style.width = '200px';

    const event = document.createEvent('UIEvents');
    event.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(event);

    const endLeftOffset = wrapper.find(`.${Styles.inkbar}`).getDOMNode().style.left;
    assert(parseInt(beginLeftOffset, 10) > parseInt(endLeftOffset, 10));
  }));
});
