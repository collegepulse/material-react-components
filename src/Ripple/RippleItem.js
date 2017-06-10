import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './RippleItem.css';

class RippleItem extends React.Component {
  constructor(props) {
    super(props);
    this.rippleStyles = this.rippleStyles.bind(this);
    this.state = {
      rippleVisible: false,
      rippleLeaving: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this.leaveTimer);
  }

  componentWillLeave(cb) {
    this.stop(() => {
      this.leaveTimer = setTimeout(() => {
        cb();
      }, 550);
    });
  }

  componentWillEnter(cb) {
    this.start(cb);
  }

  start(cb) {
    this.setState({
      rippleVisible: true
    }, cb);
  }

  stop(cb) {
    this.setState({
      rippleLeaving: true
    }, cb);
  }

  rippleStyles() {
    const {color, rippleSize, rippleX, rippleY} = this.props;
    const rippleStyles = {
      backgroundColor: color,
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX,
    };
    return rippleStyles;
  }

  render() {
    const {pulsate} = this.props;
    const {rippleLeaving, rippleVisible} = this.state;

    const containerClasses = makeClass(Styles.container, {
      [Styles.containerLeaving]: rippleLeaving,
      [Styles.containerPulsating]: pulsate && !rippleLeaving
    });

    const rippleClasses = makeClass(Styles.ripple, {
      [Styles.rippleVisible]: rippleVisible,
      [Styles.rippleFast]: pulsate
    });

    return (
      <span className={containerClasses}>
        <span className={rippleClasses} style={this.rippleStyles()} />
      </span>
    );
  }
}

RippleItem.defaultProps = {
  color: 'rgba(0, 0, 0, 0.87)',
  rippleX: 0,
  rippleY: 0,
  rippleSize: 0,
  pulsate: false
};

RippleItem.propTypes = {
  color: PropTypes.string,
  rippleX: PropTypes.number,
  rippleY: PropTypes.number,
  rippleSize: PropTypes.number,
  pulsate: PropTypes.bool
};

export default RippleItem;
