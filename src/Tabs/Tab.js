import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tab.css';

class Tab extends React.Component {
  render() {
    const {label, type, index, ...other} = this.props;
    return (
      <Button
        {...other}
        className={makeClass(Styles.tab, {
          [Styles.fixed]: type === 'fixed',
          [Styles.scrollable]: type === 'scrollable'
        })}
      >
        {label}
      </Button>
    );
  }
}

Tab.defaultProps = {
  index: null,
  domRef: () => {},
  label: null,
  type: 'fixed'
};

Tab.propTypes = {
  index: PropTypes.number,
  domRef: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tab;
