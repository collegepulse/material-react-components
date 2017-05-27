import keycode from 'keycode';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Ripple from '../Ripple';
import Styles from './FlatButton.css';

class FlatButton extends React.Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      mouseFocused: false
    };
  }

  onMouseDown(e) {
    this.setState({mouseFocused: true});
    this.ripple.add(e, {}, () => (
      this.ripple.remove(e, {removeAll: true})
    ));
  }

  onMouseLeave(e) {
    if (this.button !== document.activeElement) {
      this.ripple.remove(e);
    }
  }

  onKeyDown(e) {
    this.setState({mouseFocused: false});
    const key = keycode(e.keyCode);
    if (key === 'space' || key === 'enter') {
      e.persist();
      this.ripple.add(e, {centered: true}, () => {
        this.ripple.remove(e);
      });
    }
  }

  onFocus(e) {
    if (!this.state.mouseFocused) {
      this.ripple.add(e, {centered: true});
    }
  }

  onBlur(e) {
    this.ripple.remove(e);
    this.setState({mouseFocused: false});
  }

  render() {
    const {children, className, ...other} = this.props;
    return (
      <button
        className={makeClass(Styles.root, className)}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onMouseDown={this.onMouseDown}
        onMouseLeave={this.onMouseLeave}
        tabIndex={0}
        onFocus={this.onFocus}
        {...other}
        ref={c => (this.button = c)}
      >
        {children}
        <Ripple ref={c => (this.ripple = c)} />
      </button>
    );
  }
}

FlatButton.defaultProps = {
  elevation: 0,
  children: null,
  className: null
};

FlatButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default FlatButton;
