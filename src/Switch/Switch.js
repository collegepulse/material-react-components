import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeUuid from 'uuid/v4';
import Styles from './Switch.css';

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

  onKeyUp({keyCode}) {
    const isTab = (keyCode === 9);
    const isSpace = (keyCode === 32);

    this.setState({
      keyboardFocused: (isTab || isSpace)
    });
  }

  registerInput = c => {
    this.input = c;
  }

  render() {
    const {
      checked, disabled, label, onChange, primaryColor, style, ...props
    } = this.props;
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
            ref={this.registerInput}
            aria-labelledby={labelId}
            checked={checked}
            className={Styles.input}
            disabled={disabled}
            onBlur={this.onBlur}
            onChange={onChange}
            onKeyUp={this.onKeyUp}
            type="checkbox"
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
