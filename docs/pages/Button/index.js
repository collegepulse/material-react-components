import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import Button from '../../../src/Button';
import Edit from 'material-design-icons/editor/svg/production/ic_mode_edit_24px.svg';
import Page from '../Page';
import React from 'react';
import Styles from './Button.css';
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
      fill: '#FFF',
      focusRippleDisabled: false
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {children, textColor, buttonColor, fill, fab, focusRippleDisabled} = this.state;
    return (
      <Page
        componentName="Button"
        buildYourOwn={
          <Button
            textColor={textColor}
            buttonColor={buttonColor}
            fab={fab}
            focusRippleDisabled={focusRippleDisabled}
          >
            {fab ? <Add fill={fill} focusable={false} /> : children}
          </Button>
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
          />,
          <Switch
            onChange={e => (this.onControlPanel('focusRippleDisabled', e.target.checked))}
            checked={focusRippleDisabled}
            label="focusRippleDisabled"
          />
        ]}
        examples={
          <div>
            <div className={Styles.flex}>
              <Button>Default</Button>
              <Button textColor={Variables.$orange700}>Custom Text Color</Button>
              <Button buttonColor={Variables.$accent} textColor={'#FFF'}>Custom Button Color</Button>
              <Button buttonColor={Variables.$primary} textColor={'#FFF'}>Custom Button Color</Button>
            </div>
            <div className={Styles.flex}>
              <Button fab buttonColor={Variables.$primary} textColor="#FFF">
                <Add fill="#FFF" focusable={false} />
              </Button>
              <Button fab buttonColor={Variables.$accent} textColor="#FFF">
                <Edit fill="#FFF" focusable={false} />
              </Button>
            </div>
          </div>
        }
      />
    );
  }
}

export default ButtonDocs;
