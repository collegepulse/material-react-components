/* eslint-env mocha */

import assert from 'assert';
import Collapse from './Collapse';
import {mount, shallow} from 'enzyme';
import React from 'react';
import {unmountComponentAtNode} from 'react-dom';

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
    const wrapper = shallow(<Collapse />, {attachTo: element});
    assert(wrapper);
  });

  it('should deep render', () => {
    const wrapper = mount(<Collapse />, {attachTo: element});
    assert(wrapper);
  });

  it('should not animate on initial render if open is set to true', (done) => {
    const wrapper = mount(
      <Collapse open>
        {longDiv}
      </Collapse>,
      {attachTo: element}
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
      </Collapse>,
      {attachTo: element}
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
      </Collapse>,
      {attachTo: element}
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
