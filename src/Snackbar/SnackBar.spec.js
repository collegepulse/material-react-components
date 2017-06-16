/* eslint-env mocha */

import assert from 'assert';
import Button from '../Button';
import {createShallow, createMount} from '../../test/utils';
import React from 'react';
import SnackBar, {SnackBarItem} from './index';

describe('Snackbar', () => {
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

  it('should shallow render a SnackBar', () => {
    const wrapper = shallow(<SnackBar />);
    assert(wrapper);
  });

  it('should deep render a SnackBar', () => {
    const wrapper = mount(<SnackBar />);
    assert(wrapper);
  });

  it('should render a snackbar with a single snackbaritem', (done) => {
    const snackbaritem = (
      <SnackBarItem
        message="Hello World"
        action={<Button textColor="#FFF">Test</Button>}
      />
    );
    const wrapper = mount(<SnackBar />);
    wrapper.find('SnackBar').node.queue(snackbaritem);
    setTimeout(() => {
      assert(document.body.innerHTML.indexOf('Hello World') > -1);
      done();
    }, 550);
  });

  it('should queue multiple SnackBarItem', (done) => {
    const wrapper = mount(<SnackBar />);
    const first = (
      <SnackBarItem
        message="First"
        action={
          <Button
            id="firstBtn"
            textColor="#FFF"
            onClick={() => {}}
          >
            Test
          </Button>
        }
      />
    );
    wrapper.find('SnackBar').node.queue(first);
    const second = (
      <SnackBarItem
        message="Second"
      />
    );
    wrapper.find('SnackBar').node.queue(second);
    setTimeout(() => {
      assert(wrapper.state('SnackBarItems').length === 2);
      document.getElementById('firstBtn').click();
      setTimeout(() => {
        assert(wrapper.state('SnackBarItems').length === 1);
        done();
      }, 1000);
    }, 1000);
  });
});
