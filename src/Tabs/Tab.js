import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tab.css';
import Variables from '../variables';

class Tab extends React.Component {
  render() {
    const {label, selected, type, index, indexChanged, inkBarColor, ...other} = this.props;
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
        {selected && !indexChanged && (
          <div
            className={Styles.indicator}
            style={{backgroundColor: inkBarColor}}
          />
        )}
      </Button>
    );
  }
}

Tab.defaultProps = {
  index: null,
  indexChanged: true,
  inkBarColor: Variables.$accent,
  domRef: () => {},
  label: null,
  selected: false,
  type: 'fixed'
};

Tab.propTypes = {
  index: PropTypes.number,
  indexChanged: PropTypes.bool,
  inkBarColor: PropTypes.string,
  domRef: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tab;
