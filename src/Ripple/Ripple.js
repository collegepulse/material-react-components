import PropTypes from 'prop-types';
import React from 'react';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';
import RippleItem from './RippleItem';
import Styles from './Ripple.css';

/* Usage note: the parent DOM element must have relative positioning. */
class Ripple extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      nextKey: 0,
      ripples: []
    };
  }

  add(e, options, cb = () => {}) {
    const centered = options && options.centered ? options.centered : false;
    const pulsate = options && options.pulsate ? options.pulsate : false;
    const {clientX, clientY} = e;
    const {left, top, bottom, right, height, width} = e.target.getBoundingClientRect();
    const rippleX = centered ? width / 2 : clientX - left;
    const rippleY = centered ? height / 2 : clientY - top;
    const rippleSize = centered ?
     Math.sqrt(((2 * Math.pow(width, 2)) + Math.pow(height, 2)) / 3) :
     Math.sqrt(Math.pow(right - left, 2) + Math.pow(bottom - top, 2)) * 2;

    let {ripples} = this.state;

    ripples = [...ripples, (
      <RippleItem
        color={this.props.color}
        key={this.state.nextKey}
        rippleX={rippleX}
        rippleY={rippleY}
        rippleSize={rippleSize}
        pulsate={pulsate}
      />
    )];

    this.setState({
      nextKey: this.state.nextKey + 1,
      ripples
    }, cb);
  }

  remove(e, opts, cb = () => {}) {
    const {ripples} = this.state;
    this.setState({
      ripples: opts && opts.removeAll ? [] : ripples.slice(1)
    }, cb);
  }

  render() {
    return (
      <ReactTransitionGroup
        component="span"
        transitionEnterTimeout={550}
        transitionLeaveTimeout={550}
        className={Styles.root}
      >
        {this.state.ripples}
      </ReactTransitionGroup>
    );
  }
}

export default Ripple;

Ripple.defaultProps = {
  color: 'rgba(0, 0, 0, 0.87)'
};

Ripple.propTypes = {
  color: PropTypes.string
};
