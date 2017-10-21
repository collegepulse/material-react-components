/* eslint-env mocha */

import assert from 'assert';
import {createMount, createTest} from '../../test/utils';
import React from 'react';
import GridItem from './GridItem';
import variables from '../variables';

describe('GridItem', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render a GridItem', createTest(() => {
    const component = (
      <GridItem xs={12}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100px',
            backgroundColor: variables.$black54,
            color: variables.$white
          }}
        >
          xs=12
        </div>
      </GridItem>
    );
    const wrapper = mount(component);
    assert(wrapper);
  }));
});
