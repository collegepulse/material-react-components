import DocPage from '../DocPage';
import Paper from '../../src/Paper';
import React from 'react';
import Tabs, {Tab} from '../../src/Tabs';
import TextField from '../../src/TextField';
import Variables from '../../src/variables';

class TabsDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      barColor: Variables.$primary,
      inkBarColor: Variables.$accent,
      textColor: '#FFF',
      index: 0,
      tabsBaseline: 0,
      tabsNoBackground: 0
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  onChange(e, index, key) {
    this.setState({
      [key]: index
    });
  }

  render() {
    return (
      <DocPage
        componentName="Tabs"
        buildYourOwn={
          <div style={{flex: 1}}>
            <Tabs
              barColor={this.state.barColor}
              inkBarColor={this.state.inkBarColor}
              textColor={this.state.textColor}
              index={this.state.index}
              onChange={(e, index) => (this.onChange(e, index, 'index'))}
            >
              <Tab label="Tab #0" />
              <Tab label="Tab #1" />
              <Tab label="Tab #2" />
            </Tabs>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex'}}>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('barColor', e.target.value))}
                label="barColor"
                value={this.state.barColor}
                helperText="Tab bar background color"
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('inkBarColor', e.target.value))}
                label="inkBarColor"
                value={this.state.inkBarColor}
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('textColor', e.target.value))}
                label="textColor"
                value={this.state.textColor}
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                type="number"
                onChange={e => (this.onControlPanel('index', Number(e.target.value)))}
                label="index"
                value={String(this.state.index)}
              />
            </div>
          </div>
        }
        examples={
          <div style={{display: 'flex'}}>
            <Paper elevation={3} style={{margin: '30px', flex: 1}}>
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
            <Paper elevation={3} style={{margin: '30px', flex: 1}}>
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
        }
      />
    );
  }
}

export default TabsDocs;
