import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './TableCell.css';

class TableCell extends React.Component {
  render() {
    const {
      children,
      className,
      head,
      ...other
    } = this.props;
    const Component = head ? 'th' : 'td';
    const classnames = makeClass(Styles.cell, {
      [Styles.head]: head
    }, className);

    return (
      <Component className={classnames} {...other}>
        {children}
      </Component>
    );
  }
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  head: PropTypes.bool
};

TableCell.defaultProps = {
  children: null,
  className: '',
  head: false
};

export default TableCell;
