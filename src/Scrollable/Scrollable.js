import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Scrollable.css';

class Scrollable extends React.Component {
  render() {
    const firstChild = React.Children.only(this.props.children);
    return React.cloneElement(firstChild, {
      className: makeClass(Styles.root, firstChild.props.className)
    });
  }
}

Scrollable.defaultProps = {
  children: null
};

Scrollable.propTypes = {
  children: PropTypes.node
};

export default Scrollable;
