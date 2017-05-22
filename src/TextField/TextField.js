import Animations from './TextFieldAnimations.css';
import Input from './Input';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './TextField.css';
import TextArea from './TextArea';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      focused: false
    };
  }

  onBlur() {
    const {value, placeholder} = this.props;
    if (!value && !placeholder) {
      this.label.style.animationName = Animations.sink;
    }
    this.setState({focused: false});
  }

  onFocus() {
    const {value, placeholder} = this.props;
    if (!value && !placeholder) {
      this.label.style.animationName = Animations.float;
    }
    this.setState({focused: true});
  }

  render() {
    const {errorColor, id, helperText, label, placeholder,
      value, multiline, primaryColor, ...other} = this.props;
    const {focused} = this.state;
    const FormComponent = multiline ? TextArea : Input;
    return (
      <div className={Styles.root}>
        <FormComponent
          className={makeClass(Styles.input, {
            [Styles.hasPlaceholder]: placeholder,
            [Styles.hasValue]: value.length > 0
          })}
          onChange={this.props.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          placeholder={placeholder}
          aria-label={label}
          id={id}
          {...other}
        />
        <label
          className={Styles.label}
          htmlFor={id}
          ref={c => (this.label = c)}
          style={{
            color: errorColor || (focused && primaryColor)
          }}
        >
          {label}
        </label>
        <div className={Styles.inkbar} style={{backgroundColor: errorColor || primaryColor}} />
        <div className={Styles.helper} style={{color: errorColor}}>{helperText}</div>
      </div>
    );
  }
}

TextField.defaultProps = {
  errorColor: null,
  id: null,
  helperText: null,
  placeholder: null,
  primaryColor: null,
  multiline: false
};

TextField.propTypes = {
  errorColor: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  primaryColor: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default TextField;
