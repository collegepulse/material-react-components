import PropTypes from 'prop-types';
import React from 'react';

class TableRow extends React.Component {
  renderChildren() {
    const {children, head} = this.props;
    return React.Children.map(children, child => (
      React.cloneElement(child, {head})
    ));
  }

  render() {
    return (
      <tr>
        {this.renderChildren()}
      </tr>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,
  head: PropTypes.bool
};

TableRow.defaultProps = {
  children: null,
  head: false
};

export default TableRow;
