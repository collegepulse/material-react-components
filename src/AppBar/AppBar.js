import makeClass from 'classnames';
import Paper from '../Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './AppBar.css';
import Typography from '../Typography';
import Variables from '../variables';

function AppBar({backgroundColor, className, elevation, children, ...other}) {
  return (
    <Paper
      {...other}
      backgroundColor={backgroundColor}
      className={makeClass(className, Styles.root)}
      elevation={elevation}
    >
      <Typography type="title" className={Styles.header}>
        {children}
      </Typography>
    </Paper>
  );
}

AppBar.defaultProps = {
  backgroundColor: Variables.$primary,
  className: '',
  children: null,
  elevation: 4,
};

AppBar.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  elevation: PropTypes.number,
};


export default AppBar;
