import PropTypes from 'prop-types';
import React from 'react';
import Styles from './BottomNavigation.css';

function BottomNavigation({children, ...other}) {
  return (
    <div {...other} className={Styles.root}>
      {children}
    </div>
  );
}

BottomNavigation.defaultProps = {
  children: null
};

BottomNavigation.propTypes = {
  children: PropTypes.node
};

export default BottomNavigation;
