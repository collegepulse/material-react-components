import Button from '../Button';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './SvgIcon.css';

/* This wrapper is a necessary abstraction since IE11 makes
 * SVG's tab key focusable, even when tabindex = -1.
 */
function SvgIcon({component, ...other}) {
  const Component = component;
  return (
    <Button icon className={Styles.root}>
      <Component {...other} focusable={false} />
    </Button>
  );
}

SvgIcon.defaultProps = {
  component: null
};

SvgIcon.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default SvgIcon;
