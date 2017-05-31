import PropTypes from 'prop-types';
import React from 'react';

/* This wrapper is a necessary abstraction since IE11 makes
 * SVG's tab key focusable, even when tabindex = -1.
 */
function SvgWrapper({component, ...other}) {
  const Component = component;
  return (
    <Component {...other} focusable={false} />
  );
}

SvgWrapper.defaultProps = {
  component: null
};

SvgWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default SvgWrapper;
