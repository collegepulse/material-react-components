import Animations from './TextFieldAnimations.css';
import makeClass from 'classnames';
import makeUuid from 'uuid/v4';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './TextField.css';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.fixHeight = this.fixHeight.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      focused: false,
      labelId: makeUuid()
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
    /* reset height to auto to ensure textfield height decreases when text is removed */
    if (this.props.multiline) {
      if (e && e.target && e.target.value) {
        this.shadow.value = e.target.value;
      }
      const newHeight = this.shadow.scrollHeight + 20;
      this.formElement.style.height = `${newHeight}px`;
    }
  }

  render() {
    const {errorColor, helperText, label, placeholder,
      value, multiline, primaryColor, width, ...other} = this.props;
    const {focused, labelId} = this.state;
    const FormComponent = multiline ? 'textarea' : 'input';
    const notEmpty = value.length > 0;
    return (
      <div className={Styles.root} style={{width}}>
        {/* Shadow <textarea> is used to compute real textarea height. */}
        {multiline && (
          <textarea
            className={Styles.shadow}
            readOnly
            ref={c => (this.shadow = c)}
            tabIndex={-1}
            value={value}
          />
        )}
        <FormComponent
          {...other}
          className={makeClass(Styles.input, {
            [Styles.textarea]: multiline,
            [Styles.hasPlaceholder]: placeholder,
            [Styles.hasValue]: notEmpty
          })}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          placeholder={placeholder}
          aria-labelledby={labelId}
          ref={c => (this.formElement = c)}
        />
        <label
          className={Styles.label}
          id={labelId}
          ref={c => (this.label = c)}
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
  placeholder: null,
  primaryColor: null,
  multiline: false,
  width: '100%'
};

TextField.propTypes = {
  errorColor: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  primaryColor: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.string
};

export default TextField;
