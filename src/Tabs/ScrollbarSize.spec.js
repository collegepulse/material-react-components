import assert from 'assert';
import EventListener from 'react-event-listener';
import React from 'react';
import {spy, useFakeTimers} from 'sinon';
import {createMount, createShallow} from '../../test/utils';
import ScrollbarSize from './ScrollbarSize';

describe('<ScrollbarSize />', () => {
  const defaultProps = {
    onLoad: () => {},
    onChange: () => {}
  };
  let clock;
  let mount;
  let shallow;

  before(() => {
    clock = useFakeTimers();
  });

  beforeEach(() => {
    mount = createMount();
    shallow = createShallow();
  });

  afterEach(() => {
    mount.cleanUp();
    shallow.cleanUp();
  });

  after(() => {
    clock.restore();
  });

  describe('prop: onLoad', () => {
    it('should not call on initial load', () => {
      const onLoad = spy();
      mount(<ScrollbarSize {...defaultProps}/>);
      assert(onLoad.callCount === 0);
    });

    it('should call on initial load', () => {
      const onLoad = spy();
      mount(<ScrollbarSize {...defaultProps} onLoad={onLoad}/>);
      assert(onLoad.callCount === 1);
      assert(onLoad.calledWith({scrollbarHeight: 0, scrollbarWidth: 0}) === true);
    });
  });

  describe('prop: onChange', () => {
    let onChange;
    let wrapper;

    beforeEach(() => {
      onChange = spy();
      wrapper = shallow(<ScrollbarSize {...defaultProps} onChange={onChange}/>);
      const instance = wrapper.instance();
      instance.nodeRef = {
        offsetHeight: 17,
        clientHeight: 0,
        offsetWidth: 17,
        clientWidth: 0
      };
    });

    it('should call on first resize event', () => {
      wrapper.find(EventListener).simulate('resize');
      clock.tick(166);
      assert(onChange.callCount === 1);
      assert(onChange.calledWith({scrollbarHeight: 17, scrollbarWidth: 17}) === true);
    });

    it('should not call on second resize event', () => {
      wrapper.find(EventListener).simulate('resize');
      clock.tick(166);
      assert(onChange.callCount === 1);
    });
  });
});
