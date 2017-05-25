import keycode from 'keycode';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Ripple from '../Ripple';
import Styles from './FlatButton.css';

class FlatButton extends React.Component {

  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onMouseDown(e) {
    e.persist();
    this.ripple.remove(e, {}, () => (
      this.ripple.add(e)
    ));
  }

  onMouseUp(e) {
    this.ripple.remove(e);
  }

  onBlur(e) {
    this.ripple.remove(e);
  }

  onKeyUp(e) {
    const key = keycode(e.keyCode);
    if (key === 'space' || key === 'enter') {
      e.persist();
      this.ripple.add(e, {centered: true}, () => {
        this.ripple.remove(e);
      });
    } else if (key === 'tab') {
      this.ripple.add(e, {centered: true});
    }
  }

  render() {
    const {children, className, ...other} = this.props;
    return (
      <button
        className={makeClass(Styles.root, className)}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        onKeyUp={this.onKeyUp}
        onBlur={this.onBlur}
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
  children: null,
  className: null
};

FlatButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default FlatButton;
