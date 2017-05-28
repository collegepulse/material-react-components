import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Paper.css';

function Paper({backgroundColor, children, className, elevation, style, ...other}) {
  return (
    <div
      {...other}
      className={makeClass(className, Styles.root, Styles[`elevation${elevation}`])}
      style={Object.assign({}, style, {backgroundColor})}
    >
      {children}
    </div>
  );
}

Paper.defaultProps = {
  backgroundColor: '#fff',
  children: null,
  className: '',
  elevation: 1,
  style: {}
};

Paper.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  elevation: PropTypes.number,
  style: PropTypes.object
};

export default Paper;
