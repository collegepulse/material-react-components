import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollbarSize from 'react-scrollbar-size';
import Styles from './Tabs.css';
import Variables from '../variables';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.setInkbarStyles = this.setInkbarStyles.bind(this);
    this.makeTabs = this.makeTabs.bind(this);
    this.registerInkBar = this.registerInkBar.bind(this);
    this.registerTabBar = this.registerTabBar.bind(this);
    this.scrollbarSizeLoad = this.scrollbarSizeLoad.bind(this);
    this.scrollbarSizeChange = this.scrollbarSizeChange.bind(this);
    this.tabs = {};
    this.state = {
      inkBarLeft: 0,
      inkBarWidth: 0,
      scrollbarHeight: 0
    };
  }

  componentDidMount() {
    this.setInkbarStyles();
    this.timeout = setTimeout(() => (
      this.inkbar.style.transition = 'all 250ms ease'
    ), 0);
    window.addEventListener('resize', this.setInkbarStyles);
  }

  componentDidUpdate({index, type}) {
    if (this.props.index !== index ||
      this.props.type !== type) {
      setTimeout(() => (
        this.setInkbarStyles()
      ), 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setInkbarStyles);
    clearTimeout(this.timeout);
  }

  onClick(e, index) {
    this.props.onChange(e, index);
  }

  setInkbarStyles(nextIndex) {
    const index = typeof nextIndex === 'number' ? nextIndex : this.props.index;
    const currentTab = this.tabs[index];
    if (currentTab) {
      const {width, left} = currentTab.getBoundingClientRect();
      const scrollLeft = this.tabBar.scrollLeft;
      const tabBarLeft = this.tabBar.getBoundingClientRect().left;
      const inkBarLeft = `${(scrollLeft + left) - tabBarLeft}px`;
      const inkBarWidth = `${width}px`;
      this.setState({
        inkBarLeft,
        inkBarWidth
      });
    }
  }

  scrollbarSizeLoad({scrollbarHeight}) {
    this.setState({scrollbarHeight});
  }

  scrollbarSizeChange(scrollbarHeight) {
    this.setState({scrollbarHeight});
  }

  makeTabs() {
    const {children, textColor, type} = this.props;
    return React.Children.map(children, (tab, i) => {
      const other = {};
      return React.cloneElement(tab, {
        onClick: e => (this.onClick(e, i)),
        domRef: (c) => {
          this.tabs[i] = c;
        },
        style: {
          boxShadow: 'none',
          ...other
        },
        textColor,
        type
      });
    });
  }

  registerTabBar(c) {
    this.tabBar = c;
  }

  registerInkBar(c) {
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
          ref={this.registerTabBar}
          style={{
            marginBottom: (isScrollable || isCentered) ? `${-1 * scrollbarHeight}px` : 0
          }}
        >
          <ScrollbarSize
            onLoad={this.scrollbarSizeLoad}
            onChange={this.scrollbarSizeChange}
          />
          <div
            className={makeClass({
              [Styles.fullWidth]: isFixed
            })}
          >
            {this.makeTabs()}
          </div>
          <div
            className={Styles.inkbar}
            style={{
              left: this.state.inkBarLeft,
              width: this.state.inkBarWidth,
              backgroundColor: this.props.inkBarColor
            }}
            ref={this.registerInkBar}
          />
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
