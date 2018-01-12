import PropTypes from 'prop-types';
import React from 'react';

class TableBody extends React.Component {
  render() {
    const {children, ...other} = this.props;
    return (
      <tbody {...other}>
        {children}
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
