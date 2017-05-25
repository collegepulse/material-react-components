import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Paper.css';

function Paper({children, className, elevation, ...other}) {
  return (
    <div
      {...other}
      className={makeClass(className, Styles.root, Styles[`elevation${elevation}`])}
    >
      {children}
    </div>
  );
}

Paper.defaultProps = {
  children: null,
  className: '',
  elevation: 1
};

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  elevation: PropTypes.number
};

export default Paper;
