import FlatButton from '../FlatButton';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './BottomNavigationItem.css';

function BottomNavigationItem({children, className, ...other}) {
  return (
    <FlatButton {...other} className={makeClass(Styles.root, className)}>
      {children}
    </FlatButton>
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
