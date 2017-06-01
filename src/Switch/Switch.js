import keycode from 'keycode';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Switch.css';
import makeUuid from 'uuid/v4';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = {
      keyboardFocused: false,
      labelId: makeUuid()
    };
  }

  onBlur() {
    this.setState({
      keyboardFocused: false
    });
  }

  onMouseUp() {
    this.input.click();
  }

  onKeyUp(e) {
    const key = keycode(e.keyCode);
    this.setState({
      keyboardFocused: (key === 'tab' || key === 'space')
    });
  }

  render() {
    const {checked, disabled, label, onChange, primaryColor, style, ...props} = this.props;
    const {keyboardFocused, labelId} = this.state;
    return (
      <div
        className={makeClass(Styles.root, {
          [Styles.disabled]: disabled
        })}
        onMouseUp={this.onMouseUp}
        style={style}
      >
        <div className={Styles.switchWrapper}>
          <input
            {...props}
            className={Styles.input}
            onBlur={this.onBlur}
            onKeyUp={this.onKeyUp}
            type={'checkbox'}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            aria-labelledby={labelId}
            ref={c => (this.input = c)}
          />
          <div
            className={Styles.track}
            style={{
              backgroundColor: checked && !disabled && primaryColor
            }}
          />
          <div
            className={makeClass(Styles.thumb, {
              [Styles.thumbKeyboardFocus]: keyboardFocused
            })}
            style={{
              backgroundColor: checked && !disabled && primaryColor
            }}
          />
        </div>
        <label id={labelId} className={Styles.label}>{label}</label>
      </div>
    );
  }
}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  label: null,
  primaryColor: null,
  style: {}
};

Switch.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  primaryColor: PropTypes.string,
  style: PropTypes.object
};

export default Switch;
