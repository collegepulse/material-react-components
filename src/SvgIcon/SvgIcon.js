import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Styles from './SvgIcon.css';

/* This wrapper is a necessary abstraction since IE11 makes
 * SVG's tab key focusable, even when tabindex = -1.
 */
class SvgIcon extends React.Component {
  render() {
    const {buttonProps, component, ...other} = this.props;
    const Component = component;
    return (
      <Button
        icon
        {...buttonProps}
        className={makeClass(Styles.root, buttonProps.className)}
      >
        <Component focusable="false" {...other}/>
      </Button>
    );
  }
}

SvgIcon.defaultProps = {
  buttonProps: {
    className: null
  }
};

SvgIcon.propTypes = {
  buttonProps: PropTypes.object,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default SvgIcon;
