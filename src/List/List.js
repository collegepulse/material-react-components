import deepAssign from 'deep-assign';
import keycode from 'keycode';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './List.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e, ...args) {
    const key = e.keyCode;
    if (key === keycode('down') || key === keycode('up')) {
      e.preventDefault();
      const nodeOfInterest = key === keycode('up') ? 'previousElementSibling' : 'nextElementSibling';
      const nextListItem = e.target.parentElement;
      if (nextListItem && nextListItem[nodeOfInterest]) {
        nextListItem[nodeOfInterest].firstChild.focus();
      }
    }
    this.props.onKeyDown(e, ...args);
  }

  registerRoot = c => {
    this.root = c;
  }

  render() {
    const {
      arrowNavigation, children, className, onKeyDown, ...other
    } = this.props;
    return (
      <div {...other} ref={this.registerRoot} className={makeClass(Styles.root, className)}>
        {React.Children.map(children, child => {
          const props = {
            buttonProps: deepAssign({focusRippleDisabled: true}, child.props.buttonProps)
          };
          if (arrowNavigation) {
            props.onKeyDown = this.onKeyDown;
          }
          return React.cloneElement(child, props);
        })}
      </div>
    );
  }
}

List.defaultProps = {
  arrowNavigation: false,
  children: null,
  className: null,
  onKeyDown: () => {},
  style: {}
};

List.propTypes = {
  arrowNavigation: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onKeyDown: PropTypes.func,
  style: PropTypes.object
};

export default List;
