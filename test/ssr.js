/* eslint-env mocha */

import assert from 'assert';
import Edit from 'material-design-icons/editor/svg/production/ic_mode_edit_24px.svg';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SvgWrapper from '../src/SvgWrapper';

/*
 * These lightweight tests are an assurance that
 * components render in server-side environments
 */
describe('Server Side Rendering', () => {
  it('should render SVG', () => {
    const render = ReactDOMServer.renderToString(
      <SvgWrapper component={Edit} fill="#FFF" />
    );
    assert(render.indexOf('svg') > -1);
  });
});
