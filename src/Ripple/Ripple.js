import PropTypes from 'prop-types';
import React from 'react';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';
import RippleItem from './RippleItem';
import Styles from './Ripple.css';

/* Usage note: the parent DOM element must have relative positioning. */
class Ripple extends React.Component {
  static defaultProps = {
    color: 'rgba(0, 0, 0, 0.87)'
  };

  static propTypes = {
    color: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.ignoringMouseDown = false;
    this.state = {
      nextKey: 0,
      ripples: []
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.color !== nextProps.color ||
      this.state.ripples.length !== nextState.ripples.length ||
      this.state.nextKey !== nextState.nextKey
    );
  }

  add(e, options, cb = () => {}) {
    if (e.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = false;
      return;
    }

    if (e.type === 'touchstart') {
      this.ignoringMouseDown = true;
    }

    const centered = options && options.centered ? options.centered : false;
    const pulsate = options && options.pulsate ? options.pulsate : false;
    const {
      left, top, bottom, right, height, width
    } = e.target.getBoundingClientRect();

    const props = {};

    if (centered) {
      props.rippleX = width / 2;
      props.rippleY = height / 2;
    } else {
      const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
      const clientY = e.clientY ? e.clientY : e.touches[0].clientY;
      props.rippleX = clientX - left;
      props.rippleY = clientY - top;
    }

    const rippleSize = centered ?
      Math.sqrt(((2 * Math.pow(width, 2)) + Math.pow(height, 2)) / 3) :
      Math.sqrt(Math.pow(right - left, 2) + Math.pow(bottom - top, 2)) * 2;

    let {ripples} = this.state;

    ripples = [...ripples, (
      <RippleItem
        color={this.props.color}
        key={this.state.nextKey}
        rippleSize={rippleSize}
        pulsate={pulsate}
        {...props}
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

