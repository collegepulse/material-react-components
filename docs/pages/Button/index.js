import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import Button from '../../../src/Button';
import Edit from 'material-design-icons/editor/svg/production/ic_mode_edit_24px.svg';
import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import React from 'react';
import Switch from '../../../src/Switch';
import TextField from '../../../src/TextField';
import Variables from '../../../src/variables';

class ButtonDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      children: 'children',
      textColor: '#FFF',
      buttonColor: Variables.$primary,
      fab: false,
      fill: '#FFF'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {children, textColor, buttonColor, fill, fab} = this.state;
    return (
      <Page
        componentName="Button"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button
              textColor={textColor}
              buttonColor={buttonColor}
              fab={fab}
            >
              {fab ? <Add fill={fill} focusable={false} /> : children}
            </Button>
          </div>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('children', e.target.value))}
            label="children"
            value={children}
            helperText="For demo, hidden when fab is enabled"
          />,
          <TextField
            onChange={e => (this.onControlPanel('textColor', e.target.value))}
            label="textColor"
            value={textColor}
            helperText="Button text color"
          />,
          <TextField
            onChange={e => (this.onControlPanel('buttonColor', e.target.value))}
            label="buttonColor"
            value={buttonColor}
            helperText="Button background color"
          />,
          <TextField
            onChange={e => (this.onControlPanel('fill', e.target.value))}
            label="fill"
            value={fill}
            helperText="SVG icon color (applicable when fab mode is enabled)"
          />,
          <Switch
            onChange={e => (this.onControlPanel('fab', e.target.checked))}
            checked={fab}
            label="fab"
          />
        ]}
        examples={
          <Grid style={{alignItems: 'center'}}>
            <GridItem xs={12} sm={4}>
              <Button>Default</Button>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Button textColor={Variables.$orange700}>Custom Text Color</Button>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Button buttonColor={Variables.$accent} textColor={'#FFF'}>Custom Button Color</Button>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Button buttonColor={Variables.$primary} textColor={'#FFF'}>Custom Button Color</Button>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Button fab buttonColor={Variables.$primary} textColor="#FFF">
                <Add fill="#FFF" focusable={false} />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Button fab buttonColor={Variables.$accent} textColor="#FFF">
                <Edit fill="#FFF" focusable={false} />
              </Button>
            </GridItem>
          </Grid>
        }
      />
    );
  }
}

export default ButtonDocs;
