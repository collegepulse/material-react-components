import DOMBodyRender from '../utils/DOMBodyRender';
import {findDOMNode} from 'react-dom';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './SnackBar.css';
import Typography from '../Typography';

class SnackBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.makeAction = this.makeAction.bind(this);
  }

  componentDidMount() {
    if (this.action) {
      findDOMNode(this.action).focus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillEnter(cb) {
    this.timeout = setTimeout(() => {
      cb();
    }, 550);
  }

  componentWillLeave(cb) {
    this.props.handleTransition();
    this.snackbar.style.animationDelay = '0ms';
    this.snackbar.style.animationName = Styles.hide;
    this.timeout = setTimeout(() => {
      cb();
      this.props.handleTransition();
    }, 550);
  }

  handleOverlayClick() {
    if (!this.props.transitioning) {
      this.props.onClose();
    }
  }


  makeAction() {
    const {action} = this.props;
    return React.cloneElement(action, {
      className: makeClass(
        action.props.className,
        Styles.button
      ),
      onClick: (...args) => {
        this.handleOverlayClick();
        if (action.props.onClick) {
          action.props.onClick(args);
        }
      },
      ref: this.registerAction
    });
  }

  registerAction = (c) => { this.action = c; }
  registerSnackbar = (c) => { this.snackbar = c; }

  render() {
    const {action, delay, message} = this.props;
    return (
      <DOMBodyRender>
        <div className={Styles.root}>
          <div
            className={Styles.overlay}
            onClick={this.handleOverlayClick}
          />
          <div className={Styles.snackbarWrapper}>
            <div
              className={
                makeClass(Styles.snackbar, {
                  [Styles.delay]: delay
                })}
              ref={this.registerSnackbar}
            >
              <Typography type="body1" className={Styles.message}>
                {message}
              </Typography>
              {action && this.makeAction()}
            </div>
          </div>
        </div>
      </DOMBodyRender>
    );
  }
}

SnackBarItem.defaultProps = {
  action: null,
  delay: false,
  handleTransition: () => {},
  message: null,
  onClose: () => {},
  transitioning: false
};

SnackBarItem.propTypes = {
  action: PropTypes.node,
  delay: PropTypes.bool,
  handleTransition: PropTypes.func,
  message: PropTypes.string,
  onClose: PropTypes.func,
  transitioning: PropTypes.bool
};

export default SnackBarItem;
