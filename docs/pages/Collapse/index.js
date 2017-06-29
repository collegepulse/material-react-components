import Collapse from '../../../src/Collapse';
import Page from '../Page';
import Paper from '../../../src/Paper';
import React from 'react';
import Styles from './Collapse.css';
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
          <Collapse open={this.state.open} className={Styles.collapse}>
            <Paper style={{whiteSpace: 'pre-wrap', padding: '10px'}}>
              {this.state.children}
            </Paper>
          </Collapse>
        }
        buildYourOwnControlPanel={[
          <Switch
            onChange={e => (this.onControlPanel('open', e.target.checked))}
            checked={this.state.open}
            label="open"
          />,
          <TextField
            onChange={e => (this.onControlPanel('children', e.target.value))}
            label="children"
            value={this.state.children}
            multiline
            helperText="Wrapped in a <Paper /> element with white-space: pre-wrap; and 10px padding."
          />
        ]}
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
