import Grid, {GridItem} from '../../../src/Grid';
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
        buildYourOwnControlPanel={[
          <TextField
            type="number"
            onChange={e => (this.onControlPanel('elevation', e.target.value))}
            label="Elevation"
            value={this.state.elevation}
            helperText="Pick a value between 1 and 25"
          />,
          <TextField
            onChange={e => (this.onControlPanel('children', e.target.value))}
            label="Children"
            value={this.state.children}
            helperText="For demonstration purposes, limited to plaintext"
          />,
          <TextField
            onChange={e => (this.onControlPanel('style', e.target.value))}
            label="Style"
            value={this.state.style}
            helperText="JSON will be converted to a style object"
          />
        ]}
        examples={
          <Grid gutter={24}>
            {[1, 2, 3].map((value) => {
              let elevationDemo;
              if (value === 1) {
                elevationDemo = 2;
              } else if (value === 2) {
                elevationDemo = 12;
              } else {
                elevationDemo = 25;
              }
              return (
                <GridItem xs={12} sm={4} key={value}>
                  <Paper
                    elevation={elevationDemo}
                    style={{height: '100px', padding: '10px', background: 'white'}}
                  >
                    Paper with elevation of {elevationDemo}.
                  </Paper>
                </GridItem>
              );
            })}
          </Grid>
        }
      />
    );
  }
}

export default PaperDocs;
