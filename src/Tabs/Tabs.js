import {findDOMNode} from 'react-dom';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollbarSize from 'react-scrollbar-size';
import Styles from './Tabs.css';
import Variables from '../variables';

class Tabs extends React.Component {
  state = {
    inkBarLeft: 0,
    inkBarWidth: 0,
    scrollbarHeight: 0,
    indexChanged: false
  };

  componentDidMount() {
    this.setInkbarStyles();
    window.addEventListener('resize', this.setInkbarStyles);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.setState({indexChanged: true});
    }
  }

  componentDidUpdate({index, type}) {
    if (
      this.props.index !== index ||
      this.props.type !== type
    ) {
      this.setInkbarStyles();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setInkbarStyles);
    clearTimeout(this.timeout);
  }

  onClick = (e, index) => {
    this.props.onChange(e, index);
  }

  getMetadata = (nextIndex) => {
    const meta = {};
    if (this.tabBar) {
      meta.tabsMeta = this.tabBar.getBoundingClientRect();
      meta.tabsMeta.scrollLeft = this.tabBar.scrollLeft;
    }
    const index = typeof nextIndex === 'number' ? nextIndex : this.props.index;
    const currentTab = findDOMNode(this.tabs[index]);
    if (currentTab) {
      meta.tabMeta = currentTab.getBoundingClientRect();
    }
    return meta;
  }

  setInkbarStyles = (nextIndex) => {
    const {tabsMeta, tabMeta} = this.getMetadata(nextIndex);
    const inkBarLeft = `${tabMeta.left + (tabsMeta.scrollLeft - tabsMeta.left)}px`;
    const inkBarWidth = `${tabMeta.width}px`;
    if (
      this.state.inkBarLeft !== inkBarLeft ||
      this.state.inkBarWidth !== inkBarWidth
    ) {
      this.setState({
        inkBarLeft,
        inkBarWidth
      });
    }
  }

  tabs = {};

  scrollbarSizeLoad = ({scrollbarHeight}) => {
    this.setState({scrollbarHeight});
  }

  scrollbarSizeChange = (scrollbarHeight) => {
    this.setState({scrollbarHeight});
  }

  makeTabs = () => {
    const {children, inkBarColor, textColor, type} = this.props;
    const {indexChanged} = this.state;
    return React.Children.map(children, (tab, i) => (
      React.cloneElement(tab, {
        index: i,
        indexChanged,
        inkBarColor,
        onClick: e => (this.onClick(e, i)),
        ref: this.registerTab,
        selected: i === this.props.index,
        style: {
          boxShadow: 'none'
        },
        textColor,
        type
      })
    ));
  }

  registerTab = (c) => {
    if (c) {
      this.tabs[c.props.index] = c;
    }
  }

  registerTabBar = (c) => {
    this.tabBar = c;
  }

  registerInkBar = (c) => {
    this.inkbar = c;
  }

  render() {
    const {barColor, className, style, type,
     inkBarColor, textColor, index, ...other} = this.props;
    const isFixed = type === 'fixed';
    const isScrollable = type === 'scrollable';
    const isCentered = type === 'centered';
    const {scrollbarHeight} = this.state;
    return (
      <div
        {...other}
        className={makeClass(Styles.tabs, className)}
        role="tablist"
        style={Object.assign({}, {
          backgroundColor: barColor
        }, style)}
      >
        <div
          className={makeClass({
            [Styles.fixed]: isFixed,
            [Styles.centered]: isCentered,
            [Styles.scrollable]: isScrollable || isCentered
          })}
          style={{
            marginBottom: `${-1 * (scrollbarHeight)}px`
          }}
        >
          <ScrollbarSize
            onLoad={this.scrollbarSizeLoad}
            onChange={this.scrollbarSizeChange}
          />
          <div
            className={makeClass({
              [Styles.fullWidth]: isFixed,
              [Styles.scrollableInner]: isScrollable || isCentered
            })}
            ref={this.registerTabBar}
          >
            {this.makeTabs()}
            {this.state.indexChanged && (<div
              className={Styles.inkbar}
              style={{
                width: this.state.inkBarWidth,
                backgroundColor: this.props.inkBarColor,
                transform: `translateX(${this.state.inkBarLeft})`,
                transition: 'all 250ms ease'
              }}
              ref={this.registerInkBar}
            />)}
          </div>
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  barColor: Variables.$primary,
  children: null,
  className: null,
  index: 0,
  inkBarColor: Variables.$accent,
  onChange: () => {},
  style: {},
  textColor: '#fff',
  type: 'fixed'
};

Tabs.propTypes = {
  barColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  index: PropTypes.number,
  inkBarColor: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  textColor: PropTypes.string,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tabs;
