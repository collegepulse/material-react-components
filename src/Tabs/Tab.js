import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tab.css';

class Tab extends React.Component {
  render() {
    const {label, selected, type, index, ...other} = this.props;
    return (
      <Button
        {...other}
        aria-selected={selected}
        className={makeClass(Styles.tab, {
          [Styles.fixed]: type === 'fixed',
          [Styles.scrollable]: type === 'scrollable'
        })}
        role="tab"
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
  selected: false,
  type: 'fixed'
};

Tab.propTypes = {
  index: PropTypes.number,
  domRef: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tab;
