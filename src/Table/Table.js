import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Table.css';

class Table extends React.Component {
  render() {
    const {children, className, ...other} = this.props;
    return (
      <div className={makeClass(Styles.container, className)}>
        <table className={Styles.table} {...other}>
          {children}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Table.defaultProps = {
  children: null,
  className: ''
};

export default Table;
