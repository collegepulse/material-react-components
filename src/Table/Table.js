import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Table.css';

class Table extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <table className={Styles.table}>
          {this.props.children}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  children: PropTypes.node
};

Table.defaultProps = {
  children: null
};

export default Table;
