import makeClass from 'classnames';
import Paper from '../Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './AppBar.css';

function AppBar({className, elevation, children, ...other}) {
  return (
    <Paper {...other} className={makeClass(className, Styles.root)} elevation={elevation}>
      {children}
    </Paper>
  );
}

AppBar.defaultProps = {
  className: '',
  children: null,
  elevation: 4,
};

AppBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  elevation: PropTypes.number,
};


export default AppBar;
