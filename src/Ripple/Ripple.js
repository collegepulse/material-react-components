import React from 'react';
import RippleItem from './RippleItem';
import Styles from './Ripple.css';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

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
    const {clientX, clientY} = e;
    const {left, top, bottom, right, height, width} = e.target.getBoundingClientRect();
    const rippleX = centered ? width / 2 : clientX - left;
    const rippleY = centered ? height / 2 : clientY - top;
    const rippleSize = Math.sqrt(Math.pow(right - left, 2) + Math.pow(bottom - top, 2)) * 2;

    let {ripples} = this.state;

    ripples = [...ripples, (
      <RippleItem
        key={this.state.nextKey}
        rippleX={rippleX}
        rippleY={rippleY}
        rippleSize={rippleSize}
        pulsate={centered}
      />
    )];

    this.setState({
      nextKey: this.state.nextKey + 1,
      ripples
    }, cb);
  }

  remove(e, options, cb = () => {}) {
    const {ripples} = this.state;
    this.setState({
      ripples: ripples.slice(1)
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
