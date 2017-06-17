import Page from '../Page';
import Paper from '../../../src/Paper';
import React from 'react';
import TextField from '../../../src/TextField';

class PaperDocs extends React.Component {

  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      children: 'Hello World',
      elevation: '10',
      style: '{"padding": "20px", "width": "300px"}'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    let elevation;
    let style;
    try {
      elevation = Number(this.state.elevation);
      style = JSON.parse(this.state.style);
    } catch (e) {
      style = {};
    }
    return (
      <Page
        componentName="Paper"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={elevation} style={style}>
              {this.state.children}
            </Paper>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex'}}>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                type="number"
                onChange={e => (this.onControlPanel('elevation', e.target.value))}
                label="Elevation"
                value={this.state.elevation}
                helperText="Pick a value between 1 and 25"
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('children', e.target.value))}
                label="Children"
                value={this.state.children}
                helperText="For demonstration purposes, limited to plaintext"
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('style', e.target.value))}
                label="Style"
                value={this.state.style}
                helperText="JSON will be converted to a style object"
              />
            </div>
          </div>
        }
        examples={
          <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
              <Paper elevation={2} style={{height: '100px', width: '80%', padding: '10px', background: 'white'}}>
                Paper with elevation of 2.
              </Paper>
            </div>
            <div style={{flex: 1}}>
              <Paper elevation={12} style={{height: '100px', width: '80%', padding: '10px', background: 'white'}}>
                Paper with elevation of 12.
              </Paper>
            </div>
            <div style={{flex: 1}}>
              <Paper elevation={25} style={{height: '100px', width: '80%', padding: '10px', background: 'white'}}>
                Paper with elevation of 25.
              </Paper>
            </div>
          </div>
        }
      />
    );
  }
}

export default PaperDocs;
