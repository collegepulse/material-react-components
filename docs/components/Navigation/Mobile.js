import PropTypes from 'prop-types';
import React from 'react';
import Shared from './Shared';
import Styles from './Mobile.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

function Mobile({onClose, open}) {
  return (
    <TransitionGroup component={FirstChild}>
      {open && <MobileInner onClose={onClose} />}
    </TransitionGroup>
  );
}

Mobile.defaultProps = {
  open: false
};

Mobile.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool
};

class MobileInner extends React.Component {
  componentWillLeave(cb) {
    this.content.style.animationName = Styles['slide-out'];
    this.overlay.style.animationName = Styles['fade-out'];
    setTimeout(() => {
      cb();
    }, 350);
  }

  render() {
    const {onClose} = this.props;
    return (
      <div className={Styles.root}>
        <div
          className={Styles.overlay}
          onClick={onClose}
          ref={c => (this.overlay = c)}
        />
        <div
          className={Styles.content}
          ref={c => (this.content = c)}
        >
          <Shared onClick={onClose} />
        </div>
      </div>
    );
  }
}

MobileInner.defaultProps = {
  onClose: () => {}
};

MobileInner.propTypes = {
  onClose: PropTypes.func
};

export default Mobile;
