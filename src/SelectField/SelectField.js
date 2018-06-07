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
    this.onChange = this.onChange.bind(this);
  }

  onChange(...args) {
    this.props.onChange(...args);
  }

  render() {
    const {
      children,
      disabled,
      errorColor,
      helperText,
      id,
      label,
      value,
      ...other
    } = this.props;
    return (
      <div className={Styles.root}>
        <label
          className={makeClass(Styles.label, {
            [Styles.hasValue]: value
          })}
          htmlFor={id}
          style={{color: errorColor}}
        >
          {label}
        </label>
        <select
          aria-invalid={Boolean(errorColor)}
          className={Styles.select}
          disabled={disabled}
          id={id}
          onChange={this.onChange}
          value={value}
          
          {...other}
        >
          {children}
        </select>
        <DropDownIcon
          className={Styles.icon}
          focusable="false"
        />
        <div
          className={Styles.inkbar}
          style={{borderBottomColor: errorColor}}
        />
        <Typography
          className={Styles.helperText}
          style={{color: errorColor}}
          type="caption"
        >
          {helperText}
        </Typography>
      </div>
    );
  }
}

SelectField.defaultProps = {
  disabled: false,
  errorColor: null,
  helperText: null,
  label: null,
  onChange: () => {},
  value: {}
};

SelectField.propTypes = {
  disabled: PropTypes.bool,
  errorColor: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any
};

export default SelectField;
