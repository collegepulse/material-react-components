import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import Button from '../../src/Button';
import DocPage from '../DocPage';
import Edit from 'material-design-icons/editor/svg/production/ic_mode_edit_24px.svg';
import React from 'react';
import Switch from '../../src/Switch';
import TextField from '../../src/TextField';
import Variables from '../../src/variables';

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
      <DocPage
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
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('children', e.target.value))}
                label="children"
                value={children}
                helperText="For demo, hidden when fab is enabled"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('textColor', e.target.value))}
                label="textColor"
                value={textColor}
                helperText="Button text color"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('buttonColor', e.target.value))}
                label="buttonColor"
                value={buttonColor}
                helperText="Button background color"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('fill', e.target.value))}
                label="fill"
                value={fill}
                helperText="SVG icon color (applicable when fab mode is enabled)"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <Switch
                onChange={e => (this.onControlPanel('fab', e.target.checked))}
                checked={fab}
                label="fab"
              />
            </div>
          </div>
        }
        examples={
          <div>
            <Button>Default</Button>
            <br />
            <Button textColor={Variables.$orange700}>Custom Text Color</Button>
            <br />
            <Button buttonColor={Variables.$accent} textColor={'#FFF'}>Custom Button Color</Button>
            <br />
            <Button buttonColor={Variables.$primary} textColor={'#FFF'}>Custom Button Color</Button>
            <br />
            <Button fab buttonColor={Variables.$primary} textColor="#FFF">
              <Add fill="#FFF" focusable={false} />
            </Button>
            <Button fab buttonColor={Variables.$accent} textColor="#FFF">
              <Edit fill="#FFF" focusable={false} />
            </Button>
          </div>
        }
      />
    );
  }
}

export default ButtonDocs;
