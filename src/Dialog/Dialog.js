import keycode from 'keycode';
import makeClass from 'classnames';
import Paper from '../../src/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Dialog.css';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenOrClose = this.onOpenOrClose.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    const {open} = this.props;
    if (open) {
      this.onOpenOrClose(open);
    }
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillReceiveProps({open}) {
    this.onOpenOrClose(open);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onOpenOrClose(open) {
    setTimeout(() => {
      if (document) {
        document.body.style.overflow = open ? 'hidden' : '';
      }
    }, open ? 0 : 225);
    this.root.style.animationName = open ? Styles.fadein : Styles.fadeout;
  }

  onKeyDown(e) {
    if (this.props.open) {
      const key = keycode(e.keyCode);
      // Only give focus to Dialog actions
      if (key === 'tab') {
        if (e.target === this.actions.lastChild || !this.root.contains(e.target)) {
          this.actions.firstChild.focus();
          e.preventDefault();
        } else if (e.target === this.actions.firstChild) {
          this.actions.lastChild.focus();
          e.preventDefault();
        }
      } else if (key === 'esc') {
        this.props.onClose();
      }
    }
  }

  render() {
    const {actions, className, description, onClose, open, title, ...other} = this.props;
    return (
      <div
        {...other}
        className={makeClass(Styles.root, {[Styles.open]: open}, className)}
        ref={c => (this.root = c)}
      >
        <div
          onClick={this.props.onClose}
          className={Styles.backdrop}
        />
        {open && (
          <Paper elevation={25} className={Styles.dialog}>
            <div className={Styles.title}>{title}</div>
            <div className={Styles.description}>{description}</div>
            <div className={Styles.actions} ref={c => (this.actions = c)}>{actions}</div>
          </Paper>
        )}
      </div>
    );
  }
}

Dialog.defaultProps = {
  actions: [],
  className: null,
  description: null,
  onClose: () => {},
  open: false,
  title: null,
};

Dialog.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  description: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.node
};

export default Dialog;
