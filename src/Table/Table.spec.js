/* eslint-env mocha */

import assert from 'assert';
import {createMount} from '../../test/utils';
import React from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from './index';

describe('Tabs', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should deep render', () => {
    const component = (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Street Address</TableCell>
            <TableCell>ZIP Code</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Johnathan Doe</TableCell>
            <TableCell>25</TableCell>
            <TableCell>700 1st Ave</TableCell>
            <TableCell>90210</TableCell>
            <TableCell>CA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>23</TableCell>
            <TableCell>15 Spruce St</TableCell>
            <TableCell>92101</TableCell>
            <TableCell>CA</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const wrapper = mount(component);
    assert(wrapper);
  });
});
