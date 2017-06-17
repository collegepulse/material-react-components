/* eslint-env mocha */

import assert from 'assert';
import {createShallow, createMount, createTest} from '../../test/utils';
import Dialog from './Dialog';
import Button from '../Button';
import keycode from 'keycode';
import React from 'react';
import Styles from './Dialog.css';

describe('Dialog', () => {
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

  it('should mount in an open state, then close', createTest(() => {
    const wrapper = mount(
      <Dialog
        open
        title="Title"
        description="Description"
        onClose={() => {
          wrapper.setProps({open: false});
        }}
        actions={[
          <Button key={'one'}>Foo</Button>,
          <Button key={'two'}>Bar</Button>
        ]}
      />
    );
    assert(wrapper.find(`.${Styles.root}`).length === 1);
    setTimeout(() => {
      wrapper.find(`.${Styles.root}`).simulate('keydown', {keyCode: keycode('esc')});
    }, 500);
    setTimeout(() => {
      assert(wrapper.find(`.${Styles.root}`).length === 0);
    }, 1000);
  }, 2000));


  it('should focus the first action on tab key press when last button has current focus', createTest(() => {
    const wrapper = mount(
      <Dialog
        open
        title="Title"
        description="Description"
        onClose={() => {
          wrapper.setProps({open: false});
        }}
        actions={[
          <Button key={'one'}>Foo</Button>,
          <Button key={'two'}>Bar</Button>
        ]}
      />
    );
    wrapper.find('button').nodes[1].focus();

    setTimeout(() => {
      wrapper.find(`.${Styles.root}`).simulate('keydown', {keyCode: keycode('tab')});
    }, 500);

    setTimeout(() => {
      assert(document.activeElement === wrapper.find('button').nodes[0]);
    }, 750);
  }));

  it('should focus the last action on shift+tab key press when first action has current focus', createTest(() => {
    const wrapper = mount(
      <Dialog
        open
        title="Title"
        description="Description"
        actions={[
          <Button key={'one'}>Foo</Button>,
          <Button key={'two'}>Bar</Button>
        ]}
      />
    );
    wrapper.find('button').nodes[0].focus();

    setTimeout(() => {
      wrapper.find(`.${Styles.root}`).simulate('keydown', {keyCode: keycode('tab'), shiftKey: true});
    }, 500);

    setTimeout(() => {
      assert(document.activeElement === wrapper.find('button').nodes[1]);
    }, 750);
  }));
});
