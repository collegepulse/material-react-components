import makeClass from 'classnames';
import Paper from '../Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './AppBar.css';
import Typography from '../Typography';
import Variables from '../variables';

function AppBar({backgroundColor, className, elevation, children, primary, secondary, ...other}) {
  return (
    <Paper
      {...other}
      backgroundColor={backgroundColor}
      className={makeClass(Styles.root, className)}
      elevation={elevation}
    >
      {primary && (
        <span className={Styles.primary}>
          {primary}
        </span>
      )}
      <Typography
        component="span"
        className={makeClass(Styles.header, {[Styles.headerNoPrimary]: !primary})}
        type="title"
      >
        {children}
      </Typography>
      {secondary && (
        <span className={Styles.secondary}>
          {secondary}
        </span>
      )}
    </Paper>
  );
}

AppBar.defaultProps = {
  backgroundColor: Variables.$primary,
  className: '',
  children: null,
  elevation: 4,
  primary: null,
  secondary: null
};

AppBar.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  elevation: PropTypes.number,
  primary: PropTypes.node,
  secondary: PropTypes.node
};


export default AppBar;
