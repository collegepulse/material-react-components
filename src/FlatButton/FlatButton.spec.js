/* eslint-env mocha */

import assert from 'assert';
import FlatButton from './FlatButton';
import keycode from 'keycode';
import React from 'react';
import Styles from '../Ripple/RippleItem.css';
import {mount, shallow} from 'enzyme';

describe('FlatButton', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<FlatButton />);
    assert(wrapper);
  });

  it('should set mouseFocused to true onMouseDown', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    const wrapper = mount(<FlatButton label={'Label'} />, element);
    const event = {
      clientX: 0,
      clientY: 0,
      getClientBoundingRect: () => (
        {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          height: 0,
          width: 0
        }
      )
    };
    wrapper.simulate('mousedown', event);
    assert(wrapper.state('mouseFocused'));
    element.remove();
  });

  it('should remove ripples onMouseLeave when the button is not the active element', () => {
    const wrapper = mount(<FlatButton />);
    wrapper.simulate('keydown', {keyCode: keycode('tab')});
    wrapper.simulate('mouseleave');
    assert(wrapper.find(`.${Styles.container}`).length === 0);
  });

  it('should add/remove a ripple when mouseFocused on space key press', (done) => {
    const wrapper = mount(<FlatButton />);
    wrapper.simulate('keydown', {keyCode: keycode('tab')});
    wrapper.simulate('keydown', {keyCode: keycode('space')});
    assert(wrapper.find(`.${Styles.container}`).length > 0);
    // some time later, the ripple is removed
    setTimeout(() => {
      assert(wrapper.find(`.${Styles.container}`).length === 0);
      done();
    }, 1000);
  });

  it('should add a ripple onFocus if not focused by mouse', () => {
    const wrapper = mount(<FlatButton />);
    wrapper.simulate('keydown', {keyCode: keycode('tab')});
    wrapper.simulate('focus');
    assert(wrapper.find(`.${Styles.container}`).length > 0);
  });

  it('should not add a ripple onFocus if focused by mouse', () => {
    const wrapper = mount(<FlatButton />);
    wrapper.simulate('click');
    assert(wrapper.find(`.${Styles.container}`).length === 0);
  });

  it('should set mouseFocused to false onBlur', () => {
    const wrapper = mount(<FlatButton />);
    wrapper.simulate('blur');
    assert(!wrapper.state('mouseFocused'));
  });
});
