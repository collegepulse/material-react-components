/* eslint-env mocha */

import assert from 'assert';
import {createMount, createTest} from '../../test/utils';
import React from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import variables from '../variables';

describe('Grid', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should render a Grid', createTest(() => {
    const wrapper = mount(
      <Grid margin={40} gutter={8}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <GridItem xs={12} sm={6} md={4} lg={3} key={item}>
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
              xs=12, sm=6, md=4, lg=3
            </div>
          </GridItem>
        ))}
      </Grid>
    );
    assert(wrapper);
  }));
});
