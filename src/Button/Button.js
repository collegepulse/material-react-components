import {findDOMNode} from 'react-dom';
import keycode from 'keycode';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Ripple from '../Ripple';
import Styles from './Button.css';
import tinycolor from 'tinycolor2';
import variables from '../variables';
import Typography from '../Typography';

const touchEvents = ['mouseDown', 'mouseUp', 'touchStart', 'touchEnd'];

function rippleMiddleware(instance, eventName, cb) {
  return (e) => {
    if (!instance.props.focusRippleDisabled ||
      (instance.props.focusRippleDisabled && touchEvents.indexOf(eventName) > -1)) {
      return cb.call(instance, e);
    }

    return true;
  };
}

class Button extends React.Component {
  state = {
    hover: false,
    mouseFocused: false
  };

  onMouseDown = rippleMiddleware(this, 'mouseDown', (e) => {
    e.persist();
    this.setState({mouseFocused: true});
    if (findDOMNode(this) === document.activeElement) {
      this.ripple.remove(e, {}, () => {
        this.ripple.add(e, {centered: this.props.icon});
      });
    } else {
      this.ripple.add(e, {centered: this.props.icon});
    }
  });

  onMouseUp = rippleMiddleware(this, 'mouseUp', (e) => {
    this.ripple.remove(e);
  });

  onMouseEnter = rippleMiddleware(this, 'mouseEnter', () => {
    this.setState({hover: true});
  });

  onMouseLeave = rippleMiddleware(this, 'mouseLeave', (e) => {
    this.setState({hover: false});
    if (this.button !== document.activeElement) {
      this.ripple.remove(e);
    }
  });

  onKeyDown = rippleMiddleware(this, 'keyDown', (e, ...args) => {
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
  });

  onFocus = rippleMiddleware(this, 'focus', (e) => {
    if (!this.state.mouseFocused) {
      this.ripple.add(e, {pulsate: !this.props.icon, centered: true});
    }
  });

  onBlur = rippleMiddleware(this, 'blur', (e) => {
    this.ripple.remove(e);
    this.setState({mouseFocused: false});
  });

  onTouchStart = rippleMiddleware(this, 'touchStart', (e) => {
    this.ripple.add(e, {centered: this.props.icon});
  });

  onTouchEnd = rippleMiddleware(this, 'touchEnd', (e) => {
    this.ripple.remove(e);
  });

  getTextColor = () => {
    const {buttonColor, textColor} = this.props;

    if (buttonColor && !textColor) {
      return this.readableTextColor();
    } else if (textColor) {
      return textColor;
    }

    return variables.$black87;
  };

  getBackgroundColor = () => {
    const {buttonColor, icon, textColor} = this.props;
    const {hover} = this.state;

    if (hover && !icon) {
      if (buttonColor) {
        return tinycolor(buttonColor).darken(5).toString();
      } else if (textColor) {
        return tinycolor(textColor).setAlpha(0.15).toString();
      }
      return tinycolor('rgba(0, 0, 0, 0.12)').toString();
    }

    return buttonColor;
  };

  readableTextColor = () => {
    const {buttonColor} = this.props;
    const colors = [variables.$white, variables.$black87];
    return tinycolor.mostReadable(buttonColor, colors).toString();
  };

  registerButton = (c) => {
    this.button = c;
    this.props.domRef(c);
  };

  registerRipple = (c) => {
    this.ripple = c;
  };

  render() {
    const {buttonColor, children, className, component, domRef,
      focusRippleDisabled, icon, fab, style, textColor, ...other} = this.props;
    const Component = component;
    const readableTextColor = this.readableTextColor();
    return (
      <Component
        tabIndex={0}
        {...other}
        className={makeClass(Styles.root, {
          [Styles.hasBackground]: buttonColor,
          [Styles.isIcon]: icon,
          [Styles.fab]: fab,
          [Styles.isNotFab]: !fab,
          [Styles.lightText]: readableTextColor === variables.$white,
          [Styles.darkText]: readableTextColor !== variables.$black87
        }, className)}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onFocus={this.onFocus}
        style={{
          backgroundColor: this.getBackgroundColor(),
          ...style
        }}
        ref={this.registerButton}
      >
        <Typography
          type="button"
          className={Styles.label}
          style={{color: this.getTextColor()}}
        >
          {children}
        </Typography>
        <Ripple
          color={icon ? variables.$black87 : textColor}
          ref={this.registerRipple}
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
  domRef: () => {},
  fab: false,
  focusRippleDisabled: false,
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
  domRef: PropTypes.func,
  fab: PropTypes.bool,
  focusRippleDisabled: PropTypes.bool,
  icon: PropTypes.bool,
  onKeyDown: PropTypes.func,
  style: PropTypes.object,
  textColor: PropTypes.string
};

export default Button;
