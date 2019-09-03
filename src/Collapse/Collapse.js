import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Collapse.css';

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.open ? null : 0
    };
  }

  componentDidMount() {
    if (this.props.open) {
      this.setState({
        height: `${this.rootInner.offsetHeight}px`
      });
    }
  }

  componentWillReceiveProps({open}) {
    if (!this.props.open && open) {
      this.setState({
        height: `${this.rootInner.offsetHeight}px`
      });
    } else if (this.props.open && !open) {
      this.setState({
        height: '0'
      });
    }
  }

  registerRoot = c => {
    this.root = c;
  }

  registerInner = c => {
    this.rootInner = c;
  }

  render() {
    const {
      open, children, className, ...other
    } = this.props;
    return (
      <div
        {...other}
        ref={this.registerRoot}
        className={makeClass(Styles.root, className)}
        style={{
          height: this.state.height,
          overflow: this.state.overflow
        }}
      >
        <div
          ref={this.registerInner}
        >
          {children}
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  children: null,
  className: null,
  open: false
};

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool
};

export default Collapse;
