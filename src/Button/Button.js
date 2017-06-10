import {findDOMNode} from 'react-dom';
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
    this.onMouseUp = this.onMouseUp.bind(this);
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
    e.persist();
    this.setState({mouseFocused: true});
    if (findDOMNode(this) === document.activeElement) {
      this.ripple.remove(e, {}, () => {
        this.ripple.add(e, {centered: this.props.icon});
      });
    } else {
      this.ripple.add(e, {centered: this.props.icon});
    }
  }

  onMouseUp(e) {
    this.ripple.remove(e);
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

  onKeyDown(e, ...args) {
    this.setState({mouseFocused: false});
    const key = keycode(e.keyCode);
    const isAnchorTag = findDOMNode(this).tagName === 'A';
    if (key === 'enter' || (!isAnchorTag && key === 'space')) {
      e.persist();
      this.ripple.remove(e, {}, () => (
        this.ripple.add(e, {pulsate: true, centered: true})
      ));
    }
    this.props.onKeyDown(e, ...args);
  }

  onFocus(e) {
    if (!this.state.mouseFocused) {
      this.ripple.add(e, {pulsate: !this.props.icon, centered: true});
    }
  }

  onBlur(e) {
    this.ripple.remove(e);
    this.setState({mouseFocused: false});
  }

  getButtonStyles() {
    const {buttonColor, icon, style, textColor} = this.props;
    const {hover} = this.state;

    let color = DEFAULT_TEXT_COLOR;
    if (buttonColor && !textColor) {
      color = tinycolor.mostReadable(buttonColor, DEFAULT_TEXT_COLORS).toString();
    } else if (textColor) {
      color = textColor;
    }

    let backgroundColor = buttonColor;
    if (hover && !icon) {
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
    const {buttonColor, children, className, component,
      icon, fab, style, textColor, ...other} = this.props;
    const Component = component;
    return (
      <Component
        {...other}
        className={makeClass(Styles.root, {
          [Styles.hasBackground]: buttonColor,
          [Styles.isIcon]: icon,
          [Styles.fab]: fab
        }, className)}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        tabIndex={0}
        onFocus={this.onFocus}
        style={this.getButtonStyles()}
        ref={c => (this.button = c)}
      >
        <span className={makeClass(Styles.label)}>
          {children}
        </span>
        <Ripple
          color={icon ? 'rgba(0,0,0,0.8)' : textColor || DEFAULT_TEXT_COLOR}
          ref={c => (this.ripple = c)}
        />
      </Component>
    );
  }
}

Button.defaultProps = {
  buttonColor: null,
  children: null,
  className: null,
  component: 'button',
  fab: false,
  icon: false,
  onKeyDown: () => {},
  style: null,
  textColor: null
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fab: PropTypes.bool,
  icon: PropTypes.bool,
  onKeyDown: PropTypes.func,
  style: PropTypes.object,
  textColor: PropTypes.string
};

export default Button;
