import React from 'react';
import PropTypes from 'prop-types';
import {render, unmountComponentAtNode} from 'react-dom';

class DOMBodyRender extends React.Component {

  constructor(props) {
    super(props);
    this.node = null;
    this.renderNode = this.renderNode.bind(this);
    this.unrenderNode = this.unrenderNode.bind(this);
  }

  componentDidMount() {
    this.renderNode();
  }

  componentDidUpdate() {
    this.renderNode();
  }

  componentWillUnmount() {
    this.unrenderNode();
  }

  unrenderNode() {
    if (!this.node) {
      return;
    }
    unmountComponentAtNode(this.node);
    if (document && document.body) {
      document.body.removeChild(this.node);
    }
  }

  renderNode() {
    if (!this.node) {
      this.node = document.createElement('div');
      if (document && document.body) {
        document.body.appendChild(this.node);
      }
    }
    render(this.props.children, this.node);
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
