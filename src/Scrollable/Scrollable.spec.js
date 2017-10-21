/* eslint-env mocha */

import assert from 'assert';
import {createMount, createTest} from '../../test/utils';
import React from 'react';
import Scrollable from './Scrollable';

describe('Scrollable', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render a custom scrollbar on WebKit browsers', createTest(() => {
    const component = (
      <Scrollable>
        <div
          style={{
            height: '200px',
            width: '200px',
            whiteSpace: 'pre',
            overflow: 'scroll'
          }}
        >
            Line 1{'\n'}
            Line 2{'\n'}
            Line 3{'\n'}
            Line 4{'\n'}
            Line 5{'\n'}
            Line 6{'\n'}
            Line 7{'\n'}
            Line 8{'\n'}
            Line 9{'\n'}
            Line 10{'\n'}
            Line 11{'\n'}
            Line 12{'\n'}
            Line 13{'\n'}
            Line 14{'\n'}
            Line 15 should cause a horizontal scrollbar to be present
        </div>
      </Scrollable>
    );
    const wrapper = mount(component);
    setTimeout(() => {
      wrapper.getDOMNode().scrollTop = 200;
    }, 500);
    assert(wrapper);
  }));
});
