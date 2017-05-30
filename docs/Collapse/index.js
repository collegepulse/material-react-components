import Collapse from '../../src/Collapse';
import Paper from '../../src/Paper';
import React from 'react';
import Switch from '../../src/Switch';

class CollapseDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      collapseBaseline: false,
      collapsedOpenOnInitialRender: true
    };
  }

  onToggle(key) {
    this.setState({
      [key]: !this.state[key]
    });
  }

  render() {
    return (
      <div>
        <h1>Collapse</h1>
        <Switch checked={this.state.collapseBaseline} onChange={() => (this.onToggle('collapseBaseline'))} label={'Initially Closed'} />
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
        <Switch checked={this.state.collapsedOpenOnInitialRender} onChange={() => (this.onToggle('collapsedOpenOnInitialRender'))} label={'Initially Opened'} />
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
    );
  }
}

export default CollapseDocs;
