import DialogInner from './DialogInner';
import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

class Dialog extends React.Component { // eslint-disable-line prefer-stateless-function
  render() {
    return (
      <TransitionGroup component={FirstChild}>
        {this.props.open && <DialogInner {...this.props} ref={c => (this.inner = c)} />}
      </TransitionGroup>
    );
  }
}

Dialog.defaultProps = {
  open: false
};

Dialog.propTypes = {
  open: PropTypes.bool
};

export default Dialog;
