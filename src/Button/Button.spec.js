/* eslint-env mocha */

import assert from 'assert';
import Button from './Button';
import keycode from 'keycode';
import React from 'react';
import Styles from '../Ripple/RippleItem.css';
import tinycolor from 'tinycolor2';
import {mount, shallow} from 'enzyme';
import Variables from '../../src/variables';

/* In some tests, we augment the actual results to prevent false negatives raised
 * by targeting multiple browsers, which have different behaviors for
 * handling floating point numbers. For example:
 *
 * Chrome: rgba(33, 150, 243, 0.15)
 * PhantomJS: rgba(33, 150, 243, 0.14902)
 *
 */
describe('Button', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Button />);
    assert(wrapper);
  });

  it('should set mouseFocused to true onMouseDown', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    const wrapper = mount(<Button label={'Label'} />, element);
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

  it('should set the hover state to true onMouseEnter', () => {
    const wrapper = mount(<Button />);
    wrapper.simulate('mouseenter');
    assert(wrapper.state('hover'));
  });

  it('should remove ripples onMouseLeave when the button is not the active element', () => {
    const wrapper = mount(<Button />);
    wrapper.simulate('keydown', {keyCode: keycode('tab')});
    wrapper.simulate('mouseleave');
    assert(wrapper.find(`.${Styles.container}`).length === 0);
  });

  it('should add/remove a ripple when mouseFocused on space key press', (done) => {
    const wrapper = mount(<Button />);
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
    const wrapper = mount(<Button />);
    wrapper.simulate('keydown', {keyCode: keycode('tab')});
    wrapper.simulate('focus');
    assert(wrapper.find(`.${Styles.container}`).length > 0);
  });

  it('should not add a ripple onFocus if focused by mouse', () => {
    const wrapper = mount(<Button />);
    wrapper.simulate('click');
    assert(wrapper.find(`.${Styles.container}`).length === 0);
  });

  it('should set mouseFocused to false onBlur', () => {
    const wrapper = mount(<Button />);
    wrapper.simulate('blur');
    assert(!wrapper.state('mouseFocused'));
  });

  it('should set most readable text color when only a buttonColor is provided', () => {
    const wrapper = mount(<Button buttonColor={Variables.$primary} />);
    const actual = wrapper.getDOMNode().style.color;
    const actualFixed = tinycolor(actual).toString();
    const expected = 'rgba(0, 0, 0, 0.87)';
    assert(actualFixed === expected);
  });

  it('should set the background color to a darkened button color when hovering', () => {
    const wrapper = mount(<Button buttonColor={Variables.$primary} />);
    wrapper.simulate('mouseenter');
    const actual = wrapper.getDOMNode().style.backgroundColor;
    const expected = 'rgb(13, 138, 238)';
    assert(actual === expected);
  });

  it('should set the background color to a transparent text color on hover if no button color is present', () => {
    const wrapper = mount(<Button textColor={Variables.$primary} />);
    wrapper.simulate('mouseenter');
    const actual = wrapper.getDOMNode().style.backgroundColor;
    const actualFixed = tinycolor(actual).toString();
    const expected = 'rgba(33, 150, 243, 0.15)';
    assert(actualFixed === expected);
  });
});