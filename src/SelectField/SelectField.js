import DropDown from './DropDown';
import DropDownIcon from 'material-design-icons/navigation/svg/production/ic_arrow_drop_down_24px.svg';
import keycode from 'keycode';
import makeClass from 'classnames';
import makeUuid from 'uuid/v4';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './SelectField.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Typography from '../Typography';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.registerRoot = this.registerRoot.bind(this);
    this.state = {
      open: false,
      labelId: makeUuid()
    };
  }

  onKeyDown(e) {
    const key = e.keyCode;
    if (key === keycode('tab') || key === keycode('esc')) {
      e.preventDefault();
      this.onToggle();
      this.dropdown.focus();
    }
  }

  onToggle() {
    if (!this.props.disabled) {
      const open = !this.state.open;
      this.setState({open});
    }
  }

  handleSelection(e, index, datum) {
    this.props.onChange(e, index, datum);
    this.onToggle();
  }

  registerRoot(c) {
    this.root = c;
  }

  render() {
    const {
      data, disabled, errorColor, helperText, iterator, label, value, ...other
    } = this.props;
    const {labelId, open} = this.state;
    return (
      <div
        {...other}
        className={makeClass(Styles.root, {[Styles.disabled]: disabled})}
        ref={this.registerRoot}
      >
        <div onClick={this.onToggle}>
          <button
            className={makeClass(Styles.icon, {[Styles.disabled]: disabled})}
            ref={c => (this.dropdown = c)}
            aria-labelledby={labelId}
            tabIndex={disabled ? -1 : 0}
          >
            <DropDownIcon />
          </button>
          <div
            className={makeClass(Styles.value, {
              [Styles.hasValue]: iterator(value).value,
              [Styles.disabled]: disabled
            })}
          >
            {iterator(value).value}
          </div>
          <label className={Styles.label} id={labelId}>
            {label}
          </label>
          <div
            className={makeClass(Styles.inkbar, {
              [Styles.inkbarDisabled]: disabled
            })}
            style={{borderBottomColor: errorColor}}
          />
          <Typography className={Styles.helperText} style={{color: errorColor}} type="caption">
            {helperText}
          </Typography>
        </div>
        <TransitionGroup component={FirstChild}>
          {open && (
            <DropDown
              {...this.props}
              anchor={this.root}
              handleSelection={this.handleSelection}
              onToggle={this.onToggle}
            />
          )}
        </TransitionGroup>
      </div>
    );
  }
}

SelectField.defaultProps = {
  data: [],
  disabled: false,
  errorColor: null,
  helperText: null,
  iterator: obj => ({key: obj.id, value: obj.value}),
  label: null,
  onChange: () => {},
  value: {}
};

SelectField.propTypes = {
  data: PropTypes.array,
  disabled: PropTypes.bool,
  errorColor: PropTypes.string,
  helperText: PropTypes.string,
  iterator: PropTypes.func,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any
};

export default SelectField;
