import DocPage from '../DocPage';
import React from 'react';
import TextField from '../../src/TextField';
import Typography from '../../src/Typography';

class TypographyDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      component: 'div',
      type: 'body1',
      value: 'Hello World'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    return (
      <DocPage
        componentName="Typography"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography
              component={this.state.component}
              type={this.state.type}
            >
              {this.state.value}
            </Typography>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('component', e.target.value))}
                label="component"
                value={this.state.component}
                helperText="HTML tag (div, span, etc)"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('type', e.target.value))}
                label="type"
                value={this.state.type}
                helperText="display4, display3, display2, display1, headline, title, subheading, body2, body1, caption, button"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('value', e.target.value))}
                label="value"
                value={this.state.value}
              />
            </div>
          </div>
        }
        examples={
          <div>
            <Typography type="display4">display4</Typography>
            <Typography type="display3">display3</Typography>
            <Typography type="display2">display2</Typography>
            <Typography type="display1">display1</Typography>
            <Typography type="headline">headline</Typography>
            <Typography type="title">title</Typography>
            <Typography type="subheading">subheading</Typography>
            <Typography type="body2">body2</Typography>
            <Typography type="body1">body1</Typography>
            <Typography type="caption">caption</Typography>
            <Typography type="button">button</Typography>
          </div>
        }
      />
    );
  }
}

export default TypographyDocs;
