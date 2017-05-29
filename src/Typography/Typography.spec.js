/* eslint-env mocha */

import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';
import Styles from './Typography.css';
import Typography from './Typography';

describe('Typography', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<Typography />);
    assert(wrapper);
  });

  it('should use custom component', () => {
    const wrapper = shallow(<Typography component="span" />);
    assert(wrapper.find('span').length === 1);
  });

  it('should apply custom typestyle class name', () => {
    const wrapper = shallow(<Typography type="display4" />);
    assert(wrapper.find(`.${Styles.display4}`).length === 1);
  });
});
