import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import Paper from '../../../src/Paper';
import React from 'react';
import SelectField from '../../../src/SelectField';
import Tabs, {Tab} from '../../../src/Tabs';
import TextField from '../../../src/TextField';
import Typography from '../../../src/Typography';
import Variables from '../../../src/variables';

class TabsDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      barColor: Variables.$primary,
      indicatorColor: Variables.$accent,
      textColor: '#FFF',
      type: {id: 'fixed', value: 'fixed'},
      index: 0,
      tabsBaseline: 0,
      tabsFullWidth: 0,
      tabsScrollable: 0,
      tabsCentered: 0
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
      <Page
        componentName="Tabs"
        buildYourOwn={
          <Tabs
            barColor={this.state.barColor}
            indicatorColor={this.state.indicatorColor}
            textColor={this.state.textColor}
            index={this.state.index}
            type={this.state.type.value}
            onChange={(e, index) => (this.onChange(e, index, 'index'))}
            style={{width: '100%'}}
          >
            <Tab label="Tab #0" />
            <Tab label="Tab #1" />
            <Tab label="Tab #2" />
          </Tabs>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('barColor', e.target.value))}
            label="barColor"
            value={this.state.barColor}
          />,
          <TextField
            onChange={e => (this.onControlPanel('indicatorColor', e.target.value))}
            label="indicatorColor"
            value={this.state.indicatorColor}
          />,
          <TextField
            onChange={e => (this.onControlPanel('textColor', e.target.value))}
            label="textColor"
            value={this.state.textColor}
          />,
          <TextField
            type="number"
            onChange={e => (this.onControlPanel('index', Number(e.target.value)))}
            label="index"
            value={String(this.state.index)}
          />,
          <SelectField
            data={[
              {
                id: 'fixed',
                value: 'fixed'
              },
              {
                id: 'scrollable',
                value: 'scrollable'
              },
              {
                id: 'centered',
                value: 'centered'
              }
            ]}
            label="type"
            value={this.state.type}
            onChange={(e, index, obj) => (this.onControlPanel('type', obj))}
          />
        ]}
        examples={
          <Grid gutter={16}>
            <GridItem xs={12}>
              <Typography component="p">
                <Typography component="span" type="body2">Fixed </Typography>
                tabs (default) have equal width.
              </Typography>
              <Paper elevation={3}>
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
            </GridItem>
            <GridItem xs={12}>
              <Typography component="p">
                <Typography component="span" type="body2">Scrollable </Typography>
                tabs have independently calculated widths.
              </Typography>
              <Paper elevation={3}>
                <Tabs
                  index={this.state.tabsFullWidth}
                  onChange={(e, index) => (this.onChange(e, index, 'tabsFullWidth'))}
                  type="scrollable"
                >
                  <Tab label="Tab #0" />
                  <Tab label="Tab #1" />
                  <Tab label="Tab #2" />
                </Tabs>
                <div style={{padding: '10px'}}>
                  Tab example with default styles. The tab index is {this.state.tabsFullWidth}.
                </div>
              </Paper>
            </GridItem>
            <GridItem xs={12} style={{maxWidth: '100%'}}>
              <Typography component="p">
                <Typography component="span" type="body2">Scrollable </Typography>
                tabs have independently calculated widths. Overflow is visible upon scrolling.
              </Typography>
              <Paper elevation={3}>
                <Tabs
                  barColor={'#f5f5f5'}
                  indicatorColor={Variables.$orange700}
                  textColor={'rgba(0, 0, 0, 0.54)'}
                  index={this.state.tabsScrollable}
                  onChange={(e, index) => (this.onChange(e, index, 'tabsScrollable'))}
                  type="scrollable"
                >
                  <Tab label="Tab #0 has a very wide label" />
                  <Tab label="Tab #1 is shorter" />
                  <Tab label="Tab #2 has a much, much, much, wider label" />
                  <Tab label="Tab #3 is a tab that is quite long" />
                  <Tab label="Tab #4 is yet another long tab" />
                  <Tab label="Tab #5 has some content" />
                  <Tab label="Tab #6 also has content" />
                  <Tab label="Tab #7" />
                  <Tab label="Tab #8" />
                  <Tab label="Tab #9" />
                </Tabs>
                <div style={{padding: '10px'}}>
                  These tabs use a custom bar color, ink bar color, and text color.
                  The tab index is {this.state.tabsScrollable}.
                </div>
              </Paper>
            </GridItem>
            <GridItem xs={12}>
              <Typography component="p">
                <Typography component="span" type="body2">Centered </Typography>
                tabs.
              </Typography>
              <Paper elevation={3}>
                <Tabs
                  barColor={'#f5f5f5'}
                  indicatorColor={Variables.$orange700}
                  textColor={'rgba(0, 0, 0, 0.54)'}
                  index={this.state.tabsCentered}
                  onChange={(e, index) => (this.onChange(e, index, 'tabsCentered'))}
                  type="centered"
                >
                  <Tab label="Tab #0" />
                  <Tab label="Tab #1" />
                  <Tab label="Tab #2" />
                </Tabs>
                <div style={{padding: '10px'}}>
                  These tabs use a custom bar color, ink bar color, and text color.
                  The tab index is {this.state.tabsCentered}.
                </div>
              </Paper>
            </GridItem>
          </Grid>
        }
      />
    );
  }
}

export default TabsDocs;
