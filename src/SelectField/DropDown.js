import DOMBodyRender from '../utils/DOMBodyRender';
import {findDOMNode} from 'react-dom';
import List, {ListItem} from '../List';
import Paper from '../Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './DropDown.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.pinToAnchor = this.pinToAnchor.bind(this);
    this.registerPopup = this.registerPopup.bind(this);
    this.registerRoot = this.registerRoot.bind(this);
    this.listitems = {};
    this.state = {
      bottom: '0px',
      left: '0px',
      top: '0px',
      width: '0px'
    };
  }

  componentDidMount() {
    const {iterator, value} = this.props;
    document.body.style.overflow = 'hidden';
    const elem = this.listitems[iterator(value).key];
    if (elem) {
      const listItem = findDOMNode(elem.Button);
      setTimeout(() => (listItem.focus()), 50);
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  pinToAnchor() {
    const {left, top, width} = this.props.anchor.getBoundingClientRect();
    const node = findDOMNode(this.popup);
    this.setState({
      bottom: (top + node.offsetHeight > window.innerHeight) ? '5px' : '0px',
      left: `${left}px`,
      top: `${top < 5 ? 5 : top}px`,
      width: `${width}px`
    });
  }

  registerPopup(c) {
    this.popup = c;
    if (c) {
      window.addEventListener('resize', this.pinToAnchor);
      this.pinToAnchor();
    } else {
      window.removeEventListener('resize', this.pinToAnchor);
    }
  }

  registerRoot(c) {
    this.root = c;
  }

  render() {
    const {
      data, handleSelection, iterator, onToggle
    } = this.props;
    return (
      <DOMBodyRender>
        <div className={Styles.modalWrapper} ref={this.registerRoot}>
          <div className={Styles.layover} onClick={onToggle} />
          <Paper
            className={Styles.popup}
            ref={this.registerPopup}
            elevation={8}
            style={this.state}
          >
            <List arrowNavigation onKeyDown={this.onKeyDown}>
              {
                data.map((datum, index) => {
                  const { key } = iterator(datum);
                  return (
                    <ListItem
                      key={key}
                      primary={iterator(datum).value}
                      onClick={e => handleSelection(e, index, datum)}
                      ref={(c) => { this.listitems[key] = c; }}
                    />
                  );
                })
              }
            </List>
          </Paper>
        </div>
      </DOMBodyRender>
    );
  }
}

DropDown.defaultProps = {
  data: [],
  iterator: () => {},
  value: {}
};

DropDown.propTypes = {
  anchor: PropTypes.instanceOf(Element).isRequired,
  data: PropTypes.array,
  handleSelection: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  iterator: PropTypes.func,
  value: PropTypes.any
};

export default DropDown;
