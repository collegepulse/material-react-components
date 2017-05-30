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
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
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

  render() {
    const {open, children, className, ...other} = this.props;
    return (
      <div
        {...other}
        className={makeClass(Styles.root, className)}
        style={{
          height: this.state.height,
          overflow: this.state.overflow
        }}
        ref={c => (this.root = c)}
      >
        <div
          ref={c => (this.rootInner = c)}
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
