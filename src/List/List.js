import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './List.css';

function List({children, className, ...other}) {
  return (
    <div {...other} className={makeClass(Styles.root, className)}>
      {children}
    </div>
  );
}

List.defaultProps = {
  children: null,
  className: null
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default List;
