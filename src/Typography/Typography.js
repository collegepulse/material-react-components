import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Typography.css';

function Typography({
  children, className, component, type, ...other
}) {
  const Component = component;
  return (
    <Component {...other} className={makeClass([Styles[type]], className)}>
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  children: null,
  className: null,
  component: 'div',
  type: 'body1'
};

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.node,
  type: PropTypes.oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subheading',
    'body2',
    'body1',
    'caption',
    'button'
  ])
};

export default Typography;
