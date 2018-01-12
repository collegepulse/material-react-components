import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './TableCell.css';

class TableCell extends React.Component {
  render() {
    const {children, head} = this.props;
    const Component = head ? 'th' : 'td';
    const classnames = makeClass(Styles.cell, {
      [Styles.head]: head
    });

    return (
      <Component className={classnames}>
        {children}
      </Component>
    );
  }
}

TableCell.propTypes = {
  children: PropTypes.node,
  head: PropTypes.bool
};

TableCell.defaultProps = {
  children: null,
  head: false
};

export default TableCell;
