import PropTypes from 'prop-types';
import React from 'react';

class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node
};

TableBody.defaultProps = {
  children: null
};

export default TableBody;
