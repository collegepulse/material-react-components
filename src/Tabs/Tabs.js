import {findDOMNode} from 'react-dom';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Variables from '../variables';
import ScrollbarSize from './ScrollbarSize';
import Styles from './Tabs.css';

class Tabs extends React.Component {
  state = {
    indicatorLeft: 0,
    indicatorWidth: 0,
    scrollbarHeight: 0,
    indexChanged: false
  };

  componentDidMount() {
    this.setIndicatorStyles();
    window.addEventListener('resize', this.setIndicatorStyles);
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
      this.setIndicatorStyles();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setIndicatorStyles);
    clearTimeout(this.timeout);
  }

  onClick = (e, index) => {
    this.props.onChange(e, index);
  }

  getMetadata = nextIndex => {
    const meta = {};
    if (this.tabsInner) {
      meta.tabsMeta = this.tabsInner.getBoundingClientRect();
      meta.tabsMeta.scrollLeft = this.tabsInner.scrollLeft;
    }
    const index = typeof nextIndex === 'number' ? nextIndex : this.props.index;
    const currentTab = findDOMNode(this.tabs[index]);
    if (currentTab) {
      meta.tabMeta = currentTab.getBoundingClientRect();
    }
    return meta;
  }

  setIndicatorStyles = nextIndex => {
    const {tabsMeta, tabMeta} = this.getMetadata(nextIndex);
    const indicatorLeft = `${tabMeta.left + (tabsMeta.scrollLeft - tabsMeta.left)}px`;
    const indicatorWidth = `${tabMeta.width}px`;
    if (
      this.state.indicatorLeft !== indicatorLeft ||
      this.state.indicatorWidth !== indicatorWidth
    ) {
      this.setState({
        indicatorLeft,
        indicatorWidth
      });
    }
  }

  tabs = {};

  scrollbarSizeLoad = ({scrollbarHeight}) => {
    this.setState({scrollbarHeight});
  }

  scrollbarSizeChange = scrollbarHeight => {
    this.setState({scrollbarHeight});
  }

  registerTab = c => {
    if (c) {
      this.tabs[c.props.index] = c;
    }
  }

  registerTabsInner = c => {
    this.tabsInner = c;
  }

  renderTabs = () => {
    const {
      children, indicatorColor, textColor, type
    } = this.props;
    const {indexChanged} = this.state;
    return React.Children.map(children, (tab, i) => (
      React.cloneElement(tab, {
        index: i,
        indexChanged,
        indicatorColor,
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

  render() {
    const {
      barColor, className, style, type,
      indicatorColor, textColor, index, ...other
    } = this.props;
    const isFixed = type === 'fixed';
    const isCentered = type === 'centered';
    const {scrollbarHeight} = this.state;
    return (
      <div
        {...other}
        className={Styles.tabs}
        style={{
          backgroundColor: barColor
        }}
      >
        <div
          ref={this.registerTabsInner}
          className={Styles.tabsInner}
          style={{
            textAlign: isCentered ? 'center' : 'left',
            margin: `0 0 -${scrollbarHeight}px`
          }}
        >
          <div
            className={makeClass(Styles.tabList, {
              [Styles.tabListFixed]: isFixed
            })}
            role="tablist"
          >
            {this.renderTabs()}
          </div>
          {this.state.indexChanged && (
            <div
              aria-hidden
              className={Styles.indicator}
              style={{
                width: this.state.indicatorWidth,
                backgroundColor: this.props.indicatorColor,
                transform: `translateX(${this.state.indicatorLeft})`
              }}
            />
          )}
        </div>
        <div aria-hidden>
          <ScrollbarSize
            onLoad={this.scrollbarSizeLoad}
            onChange={this.scrollbarSizeChange}
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
  indicatorColor: Variables.$accent,
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
  indicatorColor: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  textColor: PropTypes.string,
  type: PropTypes.oneOf(['fixed', 'scrollable', 'centered'])
};

export default Tabs;
