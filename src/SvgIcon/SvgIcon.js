import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './SvgIcon.css';

/* This wrapper is a necessary abstraction since IE11 makes
 * SVG's tab key focusable, even when tabindex = -1.
 */
function SvgIcon({buttonProps, component, ...other}) {
  const Component = component;
  return (
    <Button
      icon
      {...buttonProps}
      className={makeClass(Styles.root, buttonProps.className)}
    >
      <Component focusable={false} {...other} />
    </Button>
  );
}

SvgIcon.defaultProps = {
  buttonProps: {
    className: null
  },
  component: null
};

SvgIcon.propTypes = {
  buttonProps: PropTypes.object,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default SvgIcon;
