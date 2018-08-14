/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import Button from '../Button';
import {createShallow, createMount, createTest} from '../../test/utils';
import Styles from './SnackBar.css';
import SnackBar, {SnackBarItem} from '.';

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
    const wrapper = shallow(<SnackBar/>);
    assert(wrapper);
  });

  it('should deep render a SnackBar', () => {
    const wrapper = mount(<SnackBar/>);
    assert(wrapper);
  });

  it('should render a snackbar with a single snackbaritem', createTest(() => {
    const snackbaritem = (
      <SnackBarItem
        message="Hello World"
        action={<Button textColor="#FFF">Test</Button>}
      />
    );
    const wrapper = mount(<SnackBar/>);
    wrapper.find('SnackBar').instance().queue(snackbaritem);
    setTimeout(() => {
      assert(document.body.innerHTML.indexOf('Hello World') > -1);
    }, 550);
  }));

  it('should queue multiple SnackBarItem', createTest(() => {
    const wrapper = mount(<SnackBar/>);
    const first = (
      <SnackBarItem
        message="First"
        action={(
          <Button
            id="firstBtn"
            textColor="#FFF"
            onClick={() => {}}
          >
            First
          </Button>
        )}
      />
    );
    const second = (
      <SnackBarItem
        message="Second"
        action={(
          <Button
            textColor="#FFF"
            onClick={() => {}}
          >
            Second
          </Button>
        )}
      />
    );
    wrapper.find('SnackBar').instance().queue(first);
    wrapper.find('SnackBar').instance().queue(second);

    setTimeout(() => {
      assert(wrapper.state('SnackBarItems').length === 2);
      document.getElementById('firstBtn').click();
    }, 500);

    setTimeout(() => {
      assert(wrapper.state('SnackBarItems').length === 1);
    }, 1000);

    setTimeout(() => {
      document.getElementsByClassName(Styles.overlay)[0].click();
    }, 1500);

    setTimeout(() => {
      assert(wrapper.state('SnackBarItems').length === 0);
    }, 1750);
  }, 2000));
});
