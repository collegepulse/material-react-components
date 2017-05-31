import AppBar from '../../src/AppBar';
import Colors from '../../src/variables';
import DocPage from '../DocPage';
import React from 'react';
import TextField from '../../src/TextField';

class AppBarDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      backgroundColor: Colors.$primary,
      children: 'AppBar',
      elevation: '2',
      style: '{"color": "#fff"}'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {backgroundColor, children, elevation, style} = this.state;
    let elevationNum;
    let styleObj;
    try {
      elevationNum = Number(this.state.elevation);
      styleObj = JSON.parse(style);
    } catch (e) {
      styleObj = {};
    }
    return (
      <DocPage
        componentName="Switch"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <AppBar
              backgroundColor={backgroundColor}
              elevation={elevationNum}
              style={styleObj}
            >
              {children}
            </AppBar>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('backgroundColor', e.target.value))}
                label="backgroundColor"
                value={backgroundColor}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('children', e.target.value))}
                label="children"
                value={children}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                type="number"
                onChange={e => (this.onControlPanel('elevation', e.target.value))}
                label="elevation"
                value={elevation}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '100%'}}>
              <TextField
                onChange={e => (this.onControlPanel('style', e.target.value))}
                label="Style"
                value={style}
                helperText="JSON will be converted to a style object and applied to the <AppBar />"
              />
            </div>
          </div>
        }
        examples={
          <div>
            <AppBar elevation={2} style={{color: 'white'}}>
              AppBar
            </AppBar>
          </div>
        }
      />
    );
  }
}

export default AppBarDocs;
