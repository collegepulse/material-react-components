import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Paper.css';

class Paper extends React.Component {
  render() {
    const {backgroundColor, children, className, domRef, elevation, style, ...other} = this.props;
    return (
      <div
        {...other}
        className={makeClass(className, Styles.root, Styles[`elevation${elevation}`])}
        ref={domRef}
        style={Object.assign({}, style, {backgroundColor})}
      >
        {children}
      </div>
    );
  }
}

Paper.defaultProps = {
  backgroundColor: '#fff',
  children: null,
  className: '',
  domRef: () => {},
  elevation: 1,
  style: {}
};

Paper.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  domRef: PropTypes.func,
  elevation: PropTypes.number,
  style: PropTypes.object
};

export default Paper;
