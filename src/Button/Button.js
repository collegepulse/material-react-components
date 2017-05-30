import keycode from 'keycode';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Ripple from '../Ripple';
import Styles from './Button.css';
import tinycolor from 'tinycolor2';

const DEFAULT_TEXT_COLOR = 'rgba(0, 0, 0, 0.87)';

const DEFAULT_TEXT_COLORS = [
  DEFAULT_TEXT_COLOR,
  'rgba(255, 255, 255, 1)'
];

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.getButtonStyles = this.getButtonStyles.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      hover: false,
      mouseFocused: false
    };
  }

  onMouseDown(e) {
    this.setState({mouseFocused: true});
    this.ripple.add(e, {}, () => {
      this.ripple.remove(e);
    });
  }

  onMouseEnter() {
    this.setState({hover: true});
  }

  onMouseLeave(e) {
    this.setState({hover: false});
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

  getButtonStyles() {
    const {buttonColor, style, textColor} = this.props;
    const {hover} = this.state;

    let color = DEFAULT_TEXT_COLOR;
    if (buttonColor && !textColor) {
      color = tinycolor.mostReadable(buttonColor, DEFAULT_TEXT_COLORS).toString();
    } else if (textColor) {
      color = textColor;
    }

    let backgroundColor = buttonColor;
    if (hover) {
      if (buttonColor) {
        backgroundColor = tinycolor(buttonColor).darken(5).toString();
      } else if (textColor) {
        backgroundColor = tinycolor(textColor).setAlpha(0.15).toString();
      } else {
        backgroundColor = tinycolor('rgba(0, 0, 0, 0.12)').toString();
      }
    }

    return Object.assign({}, style, {backgroundColor, color});
  }

  render() {
    const {buttonColor, buttonRef, children, className,
      fab, style, textColor, ...other} = this.props;
    return (
      <button
        {...other}
        className={makeClass(Styles.root, className, {
          [Styles.hasBackground]: buttonColor,
          [Styles.fab]: fab
        })}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onMouseDown={this.onMouseDown}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        tabIndex={0}
        onFocus={this.onFocus}
        ref={(c) => {
          this.button = c;
          buttonRef(c);
        }}
        style={this.getButtonStyles()}
      >
        <span className={makeClass(Styles.label)}>
          {children}
        </span>
        <Ripple
          color={textColor || DEFAULT_TEXT_COLOR}
          ref={c => (this.ripple = c)}
        />
      </button>
    );
  }
}

Button.defaultProps = {
  buttonColor: null,
  buttonRef: () => {},
  children: null,
  className: null,
  fab: false,
  style: null,
  textColor: null
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  buttonRef: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  fab: PropTypes.bool,
  style: PropTypes.object,
  textColor: PropTypes.string
};

export default Button;
