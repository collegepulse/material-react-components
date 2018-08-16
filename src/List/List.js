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
    const {keyCode} = e;
    const isDown = (keyCode === 40);
    const isUp = (keyCode === 38);

    if (isDown || isUp) {
      e.preventDefault();
      const nodeOfInterest = isUp ? 'previousElementSibling' : 'nextElementSibling';
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
            buttonProps: {...child.props.buttonProps, focusRippleDisabled: true}
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
