import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Switch.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.getTrackColor = this.getTrackColor.bind(this);
    this.getThumbColor = this.getThumbColor.bind(this);
    this.state = {
      keyboardFocused: false
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

  getTrackColor = () => {
    const {checked, disabled, primaryColor} = this.props;
    if (disabled) {
      return '#bdbdbd';
    }
    if (checked) {
      return primaryColor || '#2196f3';
    }
    return '#000';
  }

  getThumbColor = () => {
    const {checked, disabled, primaryColor} = this.props;
    if (disabled && checked) {
      return '#bdbdbd';
    }
    if (checked) {
      return primaryColor || '#2196f3';
    }
    return '#FFF';
  }

  render() {
    const {
      checked,
      disabled,
      label,
      labelId,
      onChange,
      primaryColor,
      style,
      ...props
    } = this.props;
    const {keyboardFocused} = this.state;
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
            style={{backgroundColor: this.getTrackColor()}}
          />
          <div
            className={makeClass(Styles.thumb, {
              [Styles.thumbKeyboardFocus]: keyboardFocused
            })}
            style={{backgroundColor: this.getThumbColor()}}
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
  labelId: null,
  primaryColor: null,
  style: {}
};

Switch.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,
  label: PropTypes.node,
  labelId: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  primaryColor: PropTypes.string,
  style: PropTypes.object
};

export default Switch;
