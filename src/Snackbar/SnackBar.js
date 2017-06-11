import React from 'react';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

class SnackBar extends React.Component {
  constructor(props) {
    super(props);
    this.queue = this.queue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.handleTransition = this.handleTransition.bind(this);
    this.state = {
      delay: false,
      index: 0,
      SnackBarItems: [],
      transitioning: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.transitioning !== nextState.transitioning ||
      nextState.SnackBarItems.length === 1 ||
      (this.state.SnackBarItems.length - 1 === nextState.SnackBarItems.length);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  queue(SnackBarItem) {
    this.timeout = setTimeout(() => {
      const newElement = React.cloneElement(SnackBarItem, {
        key: this.state.index
      });
      this.setState({
        delay: this.state.SnackBarItems.length !== 0,
        index: this.state.index + 1,
        SnackBarItems: [
          ...this.state.SnackBarItems,
          newElement
        ]
      });
    });
  }

  dequeue() {
    const newitems = this.state.SnackBarItems.slice(1);
    this.setState({
      delay: !newitems.length !== 0,
      SnackBarItems: newitems
    });
  }

  handleTransition() {
    this.setState({transitioning: !this.state.transitioning});
  }

  render() {
    const item = this.state.SnackBarItems[0];
    return (
      <ReactTransitionGroup
        component="span"
      >
        {item && (
          React.cloneElement(item, {
            onClose: this.dequeue,
            delay: this.state.delay,
            handleTransition: this.handleTransition,
            transitioning: this.state.transitioning
          })
        )}
      </ReactTransitionGroup>
    );
  }
}

export default SnackBar;
