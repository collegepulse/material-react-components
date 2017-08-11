import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tab.css';
import Variables from '../variables';

class Tab extends React.Component {

  renderButton = () => {
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
      </Button>
    );
  }

  renderIndicator = () => (
    <div
      className={Styles.indicator}
      style={{backgroundColor: this.props.inkBarColor}}
    />
  )

  render() {
    const {selected, indexChanged} = this.props;
    const showInitialIndicator = selected && !indexChanged;

    if (showInitialIndicator) {
      return (
        <div style={{display: 'inline-block'}}>
          {this.renderButton()}
          {this.renderIndicator()}
        </div>
      );
    }

    return this.renderButton();
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
