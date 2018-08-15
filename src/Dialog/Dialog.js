import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import DialogInner from './DialogInner';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

class Dialog extends React.Component { // eslint-disable-line prefer-stateless-function
  register = c => {
    this.inner = c;
  }

  render() {
    return (
      <TransitionGroup component={FirstChild}>
        {this.props.open && <DialogInner {...this.props} ref={this.register}/>}
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
