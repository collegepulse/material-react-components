import DropDownIcon from 'material-design-icons/navigation/svg/production/ic_arrow_drop_down_24px.svg';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';
import Styles from './SelectField.css';

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
  children: null,
  disabled: false,
  errorColor: null,
  helperText: null,
  id: null,
  label: null,
  onChange: () => {},
  value: {}
};

SelectField.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  errorColor: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
};

export default SelectField;
