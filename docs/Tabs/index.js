import Paper from '../../src/Paper';
import React from 'react';
import Tabs, {Tab} from '../../src/Tabs';
import Variables from '../../src/variables';

class TabsDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      tabsBaseline: 0,
      tabsNoBackground: 0
    };
  }

  onChange(e, index, key) {
    this.setState({
      [key]: index
    });
  }

  render() {
    return (
      <div>
        <h1>Tabs</h1>
        <Paper elevation={3} style={{maxWidth: '275px'}}>
          <Tabs
            index={this.state.tabsBaseline}
            onChange={(e, index) => (this.onChange(e, index, 'tabsBaseline'))}
          >
            <Tab label="Tab #0" />
            <Tab label="Tab #1" />
            <Tab label="Tab #2" />
          </Tabs>
          <div style={{padding: '10px'}}>
            Tab example with default styles. The tab index is {this.state.tabsBaseline}.
          </div>
        </Paper>
        <br />
        <Paper elevation={3} style={{maxWidth: '275px'}}>
          <Tabs
            barColor={'#f5f5f5'}
            inkBarColor={Variables.$orange700}
            textColor={'rgba(0, 0, 0, 0.54)'}
            index={this.state.tabsNoBackground}
            onChange={(e, index) => (this.onChange(e, index, 'tabsNoBackground'))}
          >
            <Tab label="Tab #0" />
            <Tab label="Tab #1" />
            <Tab label="Tab #2" />
          </Tabs>
          <div style={{padding: '10px'}}>
            These tabs use a custom bar color, ink bar color, and text color.
            The tab index is {this.state.tabsNoBackground}.
          </div>
        </Paper>
      </div>
    );
  }
}

export default TabsDocs;
