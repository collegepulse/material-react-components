/* eslint-env mocha */

import assert from 'assert';
import Dialog from './Dialog';
import FlatButton from '../FlatButton';
import keycode from 'keycode';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Styles from './Dialog.css';

describe('Dialog', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Dialog />);
    assert(wrapper);
  });

  it('should mount', () => {
    const wrapper = mount(<Dialog />);
    assert(wrapper);
  });

  it('should mount in an open state', () => {
    const wrapper = mount(<Dialog open />);
    assert(wrapper);
  });

  it('should mount in an open state, then close', () => {
    const wrapper = mount(<Dialog open />);
    wrapper.setProps({open: false});
    assert(wrapper);
  });

  it('should mount in an open state, then close', (done) => {
    const wrapper = mount(
      <Dialog
        open
        onClose={() => {
          wrapper.setProps({open: false});
        }}
        actions={[
          <FlatButton key={'one'}>Foo</FlatButton>,
          <FlatButton key={'two'}>Bar</FlatButton>
        ]}
      />
    );
    assert(wrapper.find(`.${Styles.root}`).length === 1);
    wrapper.find(`.${Styles.root}`).simulate('keydown', {keyCode: keycode('esc')});
    setTimeout(() => {
      assert(wrapper.find(`.${Styles.root}`).length === 0);
      done();
    }, 1000);
  });


  it('should focus the first action on tab key press when last button has current focus', () => {
    let firstAction;
    let lastAction;
    const element = document.createElement('div');
    document.body.appendChild(element);
    const wrapper = mount(
      <Dialog
        open
        onClose={() => {
          wrapper.setProps({open: false});
        }}
        actions={[
          <FlatButton ref={c => (firstAction = c.button)} key={'one'}>Foo</FlatButton>,
          <FlatButton ref={c => (lastAction = c.button)} key={'two'}>Bar</FlatButton>
        ]}
      />
    , {attachTo: element});
    lastAction.focus();
    wrapper.find(`.${Styles.root}`).simulate('keydown', {keyCode: keycode('tab')});
    assert(document.activeElement === firstAction);
    element.remove();
  });

  it('should focus the last action on shift+tab key press when first action has current focus', () => {
    let firstAction;
    let lastAction;
    const element = document.createElement('div');
    document.body.appendChild(element);
    const wrapper = mount(
      <Dialog
        open
        actions={[
          <FlatButton ref={c => (firstAction = c.button)} key={'one'}>Foo</FlatButton>,
          <FlatButton ref={c => (lastAction = c.button)} key={'two'}>Bar</FlatButton>
        ]}
      />
    , {attachTo: element});
    firstAction.focus();
    wrapper.find(`.${Styles.root}`).simulate('keydown', {keyCode: keycode('tab'), shiftKey: true});
    assert(document.activeElement === lastAction);
    element.remove();
  });
});
