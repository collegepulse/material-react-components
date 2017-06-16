/* eslint-env mocha */

import assert from 'assert';
import Collapse from './Collapse';
import {createShallow, createMount} from '../../test/utils';
import React from 'react';

const longDiv = (
  <div style={{backgroundColor: 'red'}}>
    Foo<br />
    Bar<br />
    Foo<br />
    Bar<br />
    Foo<br />
    Bar<br />
    Foo<br />
    Bar<br />
  </div>
);

describe('Collapse', () => {
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
    const wrapper = shallow(<Collapse />);
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<Collapse />);
    assert(wrapper);
  });

  it('should not animate on initial render if open is set to true', (done) => {
    const wrapper = mount(
      <Collapse open>
        {longDiv}
      </Collapse>,
    );
    const initialHeight = wrapper.getDOMNode().style.height;
    assert(parseInt(initialHeight, 10) > '0');
    setTimeout(() => {
      const heightSometimeLater = wrapper.getDOMNode().style.height;
      assert(initialHeight === heightSometimeLater);
      done();
    }, 100);
  });

  it('should animate when open changes from false to true', (done) => {
    const wrapper = mount(
      <Collapse open={false}>
        {longDiv}
      </Collapse>
    );
    const initialHeight = wrapper.getDOMNode().style.height;
    wrapper.setProps({open: true});
    setTimeout(() => {
      const heightSometimeLater = wrapper.getDOMNode().style.height;
      assert(parseInt(initialHeight, 10) < parseInt(heightSometimeLater, 10));
      done();
    }, 100);
  });

  it('should animate when open changes from true to false', (done) => {
    const wrapper = mount(
      <Collapse open>
        {longDiv}
      </Collapse>
    );
    const initialHeight = wrapper.getDOMNode().style.height;
    wrapper.setProps({open: false});
    setTimeout(() => {
      const heightSometimeLater = wrapper.getDOMNode().style.height;
      assert(parseInt(initialHeight, 10) > parseInt(heightSometimeLater, 10));
      done();
    }, 100);
  });
});
