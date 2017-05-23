import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './TextArea.css';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (window) {
      const fontSize = Number(window.getComputedStyle(this.textarea).fontSize.replace(/\D/g, ''));
      /* reset height to auto to ensure textfield height decreases when text is removed */
      this.textarea.style.height = 'auto';
      this.textarea.style.height = `${this.textarea.scrollHeight - fontSize}px`;
    }
    this.props.onChange(e);
  }

  render() {
    const {className, ...props} = this.props;
    return (
      <textarea
        {...props}
        className={makeClass(className, Styles.textarea)}
        onChange={this.onChange}
        ref={c => (this.textarea = c)}
      />
    );
  }
}

TextArea.defaultProps = {
  className: null
};

TextArea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextArea;

