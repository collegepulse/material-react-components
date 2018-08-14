import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Variables from '../variables';
import Styles from './Tab.css';

class Tab extends React.Component {
  renderIndicator = () => (
    <div
      aria-hidden
      className={Styles.indicator}
      style={{backgroundColor: this.props.indicatorColor}}
    />
  )

  render() {
    const {
      label, selected, type, index, indexChanged,
      indicatorColor, ...other
    } = this.props;
    const showInitialIndicator = selected && !indexChanged;
    const isFixed = type === 'fixed';

    return (
      <Button
        {...other}
        className={makeClass(Styles.button, {
          [Styles.tabFixed]: isFixed
        })}
        role="tab"
        aria-selected={selected}
      >
        <div className={Styles.label}>
          {label}
        </div>
        {showInitialIndicator && this.renderIndicator()}
      </Button>
    );
  }
}

Tab.defaultProps = {
  index: null,
  indexChanged: true,
  indicatorColor: Variables.$accent,
  label: null,
  selected: false,
  type: 'fixed'
};

Tab.propTypes = {
  index: PropTypes.number,
  indexChanged: PropTypes.bool,
  indicatorColor: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tab;
