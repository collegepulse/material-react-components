import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './BottomNavigationItem.css';

function BottomNavigationItem({children, className, ...other}) {
  return (
    <Button {...other} className={makeClass(Styles.root, className)}>
      {children}
    </Button>
  );
}

BottomNavigationItem.defaultProps = {
  children: null,
  className: null
};

BottomNavigationItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default BottomNavigationItem;
