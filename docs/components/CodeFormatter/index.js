import lightTheme from '!raw-loader!prismjs/themes/prism.css'; // eslint-disable-line
import prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './CodeFormatter.css';

const styleNode = window.document.createElement('style');
window.document.head.appendChild(styleNode);
styleNode.textContent = lightTheme;

class CodeFormatter extends React.Component {
  render() {
    const {code, ...other} = this.props;
    const highlightedCode = prism.highlight(code, prism.languages.jsx);
    return (
      <div
        className={Styles.code}
        dangerouslySetInnerHTML={{__html: highlightedCode}}
        {...other}
      />
    );
  }
}

CodeFormatter.defaultProps = {
  code: null
};

CodeFormatter.propTypes = {
  code: PropTypes.string
};

export default CodeFormatter;
