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
      type: {id: 'body1', value: 'body1'},
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
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Typography
              component={component}
              type={type.value}
            >
              {children}
            </Typography>
          </div>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('component', e.target.value))}
            label="component"
            value={component}
            helperText="HTML tag (div, span, etc)"
          />,
          <SelectField
            data={[
              {
                id: 'display4',
                value: 'display4'
              },
              {
                id: 'display3',
                value: 'display3'
              },
              {
                id: 'display2',
                value: 'display2'
              },
              {
                id: 'display1',
                value: 'display1'
              },
              {
                id: 'headline',
                value: 'headline'
              },
              {
                id: 'title',
                value: 'title'
              },
              {
                id: 'subheading',
                value: 'subheading'
              },
              {
                id: 'body2',
                value: 'body2'
              },
              {
                id: 'body1',
                value: 'body1'
              },
              {
                id: 'caption',
                value: 'caption'
              },
              {
                id: 'button',
                value: 'button'
              }
            ]}
            label="type"
            helperText="foo"
            value={type}
            onChange={(e, index, obj) => (this.onControlPanel('type', obj))}
            helperText="display4, display3, display2, display1, headline, title, subheading, body2, body1, caption, button"
          />,
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
