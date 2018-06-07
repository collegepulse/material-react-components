import Page from '../Page';
import React from 'react';
import Scrollable from '../../../src/Scrollable';
import SelectField from '../../../src/SelectField';
import TextField from '../../../src/TextField';
import Typography from '../../../src/Typography';

class TypographyDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      component: 'div',
      type: 'body1',
      children: 'Hello World'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {component, type, children} = this.state;
    return (
      <Page
        componentName="Typography"
        buildYourOwn={
          <Typography
            component={component}
            type={type}
          >
            {children}
          </Typography>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('component', e.target.value))}
            label="component"
            value={component}
          />,
          <SelectField
            label="type"
            value={type}
            onChange={(e) => (this.onControlPanel('type', e.target.value))}
          >
            <option key="1" value="display4">display4</option>
            <option key="2" value="display3">display3</option>
            <option key="3" value="display2">display2</option>
            <option key="4" value="display1">display1</option>
            <option key="5" value="headline">headline</option>
            <option key="6" value="title">title</option>
            <option key="7" value="subheading">subheading</option>
            <option key="8" value="body2">body2</option>
            <option key="9" value="body1">body1</option>
            <option key="10" value="caption">caption</option>
            <option key="11" value="button">button</option>
          </SelectField>,
          <TextField
            onChange={e => (this.onControlPanel('children', e.target.value))}
            label="children"
            value={children}
          />
        ]}
        examples={
          <Scrollable>
            <div style={{overflowX: 'auto'}}>
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
          </Scrollable>
        }
      />
    );
  }
}

export default TypographyDocs;
