import lightTheme from '!raw-loader!prismjs/themes/prism.css'; // eslint-disable-line
import prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import PropTypes from 'prop-types';
import React from 'react';
import Scrollable from '../../../src/Scrollable';
import Styles from './CodeFormatter.css';

const styleNode = window.document.createElement('style');
window.document.head.appendChild(styleNode);
styleNode.textContent = lightTheme;

/* Removes the fewest number of spaces present in front of every line. */
function formatCode(str) {
  if (!str) {
    return '';
  }
  const lines = str.split('\n');
  let fewestStartingSpaces = Infinity;
  lines.map((line) => {
    if (line) {
      fewestStartingSpaces = Math.min(fewestStartingSpaces, line.search(/\S/));
    }
  });
  return lines.reduce((acc, val) => (
    `${acc}${val.substring(fewestStartingSpaces)}\n`
  ), '');
}

class CodeFormatter extends React.Component {
  render() {
    const {code, ...other} = this.props;
    const formattedCode = formatCode(code);
    const highlightedCode = prism.highlight(formattedCode, prism.languages.jsx);
    return (
      <Scrollable>
        <div
          className={Styles.code}
          dangerouslySetInnerHTML={{__html: highlightedCode}}
          {...other}
        />
      </Scrollable>
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
