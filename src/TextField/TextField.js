import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Animations from './TextFieldAnimations.css';
import Styles from './TextField.css';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.fixHeight = this.fixHeight.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      focused: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.fixHeight);
    if (this.props.multiline) {
      this.fixHeight();
    }
  }

  componentWillReceiveProps({value, placeholder}) {
    const oldValue = this.props.value;
    const oldPlaceholder = this.props.placeholder;

    if (document.activeElement !== this.formElement) {
      if ((!oldValue && value && !placeholder) ||
        (!oldPlaceholder && placeholder)) {
        this.label.style.animationName = Animations.float;
      } else if ((oldValue && !value && !placeholder) ||
        (!value && oldPlaceholder && !placeholder)) {
        this.label.style.animationName = Animations.sink;
      }
    }
  }

  componentDidUpdate({multiline}) {
    if (!multiline && this.props.multiline) {
      this.fixHeight();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fixHeight);
  }

  onBlur() {
    const {value, placeholder} = this.props;
    if (!value && !placeholder) {
      this.label.style.animationName = Animations.sink;
    }
    this.setState({focused: false});
  }

  onChange(e) {
    this.fixHeight(e);
    this.props.onChange(e);
  }

  onFocus() {
    const {value, placeholder} = this.props;
    if (!value && !placeholder) {
      this.label.style.animationName = Animations.float;
    }
    this.setState({focused: true});
  }

  fixHeight(e) {
    /* Reset height to auto to ensure textfield height decreases when text is removed */
    if (this.props.multiline) {
      if (e && e.target && e.target.value) {
        this.shadow.value = e.target.value;
      }
      const newHeight = this.shadow.scrollHeight + 20;
      this.formElement.style.height = `${newHeight}px`;
    }
  }

  registerShadowTextArea = c => {
    this.shadow = c;
  }

  registerFormElement = c => {
    this.formElement = c;
  }

  registerLabel = c => {
    this.label = c;
  }

  render() {
    const {
      errorColor,
      helperText,
      label,
      labelId,
      placeholder,
      value,
      multiline,
      primaryColor,
      width,
      ...other
    } = this.props;
    const {focused} = this.state;
    const FormComponent = multiline ? 'textarea' : 'input';
    const notEmpty = value && value.length > 0;
    return (
      <div className={Styles.root} style={{width}}>
        {/* Shadow <textarea> is used to compute real textarea height. */}
        {multiline && (
          <textarea
            ref={this.registerShadowTextArea}
            className={Styles.shadow}
            readOnly
            tabIndex={-1}
            value={value}
          />
        )}
        <FormComponent
          {...other}
          ref={this.registerFormElement}
          aria-labelledby={labelId}
          className={makeClass(Styles.input, {
            [Styles.textarea]: multiline,
            [Styles.hasPlaceholder]: placeholder,
            [Styles.hasValue]: notEmpty
          })}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          placeholder={placeholder}
          value={value}
        />
        <label
          ref={this.registerLabel}
          className={Styles.label}
          id={labelId}
          style={{
            color: errorColor || (focused && primaryColor)
          }}
        >
          {label}
        </label>
        <div
          className={Styles.inkbar}
          style={{borderBottomColor: errorColor || (focused && primaryColor)}}
        />
        <div className={Styles.helper} style={{color: errorColor}}>{helperText}</div>
      </div>
    );
  }
}

TextField.defaultProps = {
  errorColor: null,
  helperText: null,
  labelId: null,
  placeholder: null,
  primaryColor: null,
  multiline: false,
  width: '100%'
};

TextField.propTypes = {
  errorColor: PropTypes.string,
  helperText: PropTypes.node,
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  primaryColor: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.string
};

export default TextField;
