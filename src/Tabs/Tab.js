import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tab.css';
import Variables from '../variables';

class Tab extends React.Component {

  renderButton = () => {
    const {label, selected, type, index, indexChanged, indicatorColor, ...other} = this.props;
    return (
      <Button
        {...other}
        aria-selected={selected}
        className={makeClass(Styles.button, {
          [Styles.scrollable]: type === 'scrollable'
        })}
        role="tab"
      >
        {label}
      </Button>
    );
  }

  renderIndicator = () => (
    <div
      aria-hidden
      className={Styles.indicator}
      style={{backgroundColor: this.props.indicatorColor}}
    />
  )

  render() {
    const {selected, indexChanged, type} = this.props;
    const showInitialIndicator = selected && !indexChanged;
    const isFixed = type === 'fixed';

    return (
      <li
        className={makeClass(Styles.tab, {[Styles.tabFixed]: isFixed})}
        role="tab"
        aria-selected={selected}
      >
        {this.renderButton()}
        {showInitialIndicator && this.renderIndicator()}
      </li>
    );
  }
}

Tab.defaultProps = {
  index: null,
  indexChanged: true,
  indicatorColor: Variables.$accent,
  domRef: () => {},
  label: null,
  selected: false,
  type: 'fixed'
};

Tab.propTypes = {
  index: PropTypes.number,
  indexChanged: PropTypes.bool,
  indicatorColor: PropTypes.string,
  domRef: PropTypes.func,
  label: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tab;
