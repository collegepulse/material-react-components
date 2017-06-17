import Collapse from '../../../src/Collapse';
import Page from '../Page';
import Paper from '../../../src/Paper';
import React from 'react';
import Switch from '../../../src/Switch';
import TextField from '../../../src/TextField';

class CollapseDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      collapseBaseline: false,
      collapsedOpenOnInitialRender: true,
      open: true,
      children: 'The\nCollapse\nComponent\nInner\nText'
    };
  }

  onControlPanel(key, value) {
    if (value) {
      return this.setState({[key]: value});
    }
    return this.setState({[key]: !this.state[key]});
  }

  render() {
    return (
      <Page
        componentName="Collapse"
        buildYourOwn={
          <div style={{flex: 1}}>
            <Collapse open={this.state.open}>
              <Paper style={{whiteSpace: 'pre-wrap', padding: '10px'}}>
                {this.state.children}
              </Paper>
            </Collapse>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <Switch
                onChange={e => (this.onControlPanel('open', e.target.checked))}
                checked={this.state.open}
                label="open"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('children', e.target.value))}
                label="children"
                value={this.state.children}
                multiline
                helperText="Wrapped in a <Paper /> element with white-space: pre-wrap; and 10px padding."
              />
            </div>
          </div>
        }
        examples={
          <div>
            <Switch checked={this.state.collapseBaseline} onChange={() => (this.onControlPanel('collapseBaseline'))} label={'Initially Closed'} />
            <Collapse open={this.state.collapseBaseline}>
              <Paper style={{padding: 10}}>
                This <br />
                is <br />
                really <br />
                long <br />
                content <br />
                that <br />
                should <br />
                animate. <br />
              </Paper>
            </Collapse>
            <Switch checked={this.state.collapsedOpenOnInitialRender} onChange={() => (this.onControlPanel('collapsedOpenOnInitialRender'))} label={'Initially Opened'} />
            <Collapse open={this.state.collapsedOpenOnInitialRender}>
              <Paper style={{padding: 10}}>
                This <br />
                is <br />
                really <br />
                long <br />
                content <br />
                that <br />
                should <br />
                animate. <br />
              </Paper>
            </Collapse>
          </div>
        }
      />
    );
  }
}

export default CollapseDocs;
