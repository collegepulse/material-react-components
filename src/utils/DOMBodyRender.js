import React from 'react';
import PropTypes from 'prop-types';
import {render, unmountComponentAtNode} from 'react-dom';

class DOMBodyRender extends React.Component {

  constructor(props) {
    super(props);
    this.node = null;
  }

  componentWillMount() {
    if (document && document.body) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
      render(this.props.children, this.node);
    }
  }

  componentWillUpdate({children}) {
    render(children, this.node);
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.node);
    if (document && document.body) {
      document.body.removeChild(this.node);
    }
  }

  render() {
    return null;
  }
}

DOMBodyRender.defaultProps = {
  children: null
};

DOMBodyRender.propTypes = {
  children: PropTypes.node
};

export default DOMBodyRender;
