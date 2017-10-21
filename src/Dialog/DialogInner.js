import keycode from 'keycode';
import makeClass from 'classnames';
import Paper from '../Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Dialog.css';

function ontouchmove() {
  return true;
}

class DialogInner extends React.Component {
  constructor(props) {
    super(props);
    this.onBackwardTab = this.onBackwardTab.bind(this);
    this.onForwardTab = this.onForwardTab.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.onKeyDown);
    this.lastFocusBeforeDialog = document.activeElement;
    this.root.focus();

    this.lastOnTouchMove = document.ontouchmove || ontouchmove;
    document.ontouchmove = (e) => {
      e.preventDefault();
    };
  }

  componentWillUnmount() {
    document.ontouchmove = this.lastOnTouchMove;
  }

  onKeyDown(e) {
    if (this.props.open) {
      const key = keycode(e.keyCode);
      if (key === 'tab') {
        if (this.actions.children.length <= 1) {
          e.preventDefault();
        } else if (e.shiftKey) {
          this.onBackwardTab(e);
        } else {
          this.onForwardTab(e);
        }
      }
      if (key === 'esc') {
        this.props.onClose();
      }
    }
  }

  onForwardTab(e) {
    if (document.activeElement === this.actions.lastChild) {
      e.preventDefault();
      this.actions.firstChild.focus();
    }
  }

  onBackwardTab(e) {
    if (document.activeElement === this.actions.firstChild) {
      e.preventDefault();
      this.actions.lastChild.focus();
    }
  }

  componentWillLeave(callback) {
    this.root.style.animationName = Styles.fadeout;
    window.removeEventListener('keydown', this.onKeyDown);
    if (this.lastFocusBeforeDialog.focus) {
      this.lastFocusBeforeDialog.focus();
    }
    setTimeout(() => {
      document.body.style.overflow = '';
      callback();
    }, 350);
  }

  registerRoot = (c) => { this.root = c; }
  registerActions = (c) => { this.actions = c; }

  render() {
    const {
      actions, className, description, onClose, open, title, ...other
    } = this.props;
    return (
      <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
        {...other}
        className={makeClass(Styles.root, {[Styles.open]: open}, className)}
        ref={this.registerRoot}
        role="document"
        tabIndex={-1}
        onKeyDown={__TEST__ ? this.onKeyDown : ontouchmove}
      >
        <div
          onClick={this.props.onClose}
          className={Styles.backdrop}
        />
        <Paper
          elevation={25}
          className={Styles.dialog}
        >
          <div className={Styles.title}>
            {title}
          </div>
          <div className={Styles.description}>
            {description}
          </div>
          <div
            className={Styles.actions}
            ref={this.registerActions}
          >
            {actions}
          </div>
        </Paper>
      </div>
    );
  }
}

DialogInner.defaultProps = {
  actions: [],
  className: null,
  description: null,
  onClose: () => {},
  open: false,
  title: null,
};

DialogInner.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  description: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node
};

export default DialogInner;
