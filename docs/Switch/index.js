import Colors from '../../src/variables';
import DocPage from '../DocPage';
import React from 'react';
import Switch from '../../src/Switch';
import TextField from '../../src/TextField';

class SwitchDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      checked: true,
      disabled: false,
      label: 'Switch Label',
      primaryColor: Colors.$orange700,
      switch1: false,
      switch2: true,
      switch3: true,
      switch4: false,
      switch5: true
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    return (
      <DocPage
        componentName="Switch"
        buildYourOwn={
          <div style={{flex: 1}}>
            <Switch
              onChange={e => (this.onControlPanel('checked', e.target.checked))}
              disabled={this.state.disabled}
              label={this.state.label}
              checked={this.state.checked}
              primaryColor={this.state.primaryColor}
              style={{justifyContent: 'center'}}
            />
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex'}}>
            <div style={{flex: 1, padding: '20px'}}>
              <Switch
                onChange={e => (this.onControlPanel('checked', e.target.checked))}
                checked={this.state.checked}
                label="Checked"
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <Switch
                onChange={e => (this.onControlPanel('disabled', e.target.checked))}
                checked={this.state.disabled}
                label="Disabled"
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('label', e.target.value))}
                label="Label"
                value={this.state.label}
              />
            </div>
            <div style={{flex: 1, padding: '20px'}}>
              <TextField
                onChange={e => (this.onControlPanel('primaryColor', e.target.value))}
                label="primaryColor"
                value={this.state.primaryColor}
              />
            </div>
          </div>
        }
        examples={
          <div style={{display: 'flex'}}>
            <Switch onChange={e => (this.onControlPanel('switch1', e.target.checked))} checked={this.state.switch1} label={'Switch #1'} />
            <Switch onChange={e => (this.onControlPanel('switch2', e.target.checked))} checked={this.state.switch2} label={'Switch #2'} />
            <Switch onChange={e => (this.onControlPanel('switch3', e.target.checked))} checked={this.state.switch3} label={'Custom Color'} primaryColor={Colors.$orange700} />
            <Switch onChange={e => (this.onControlPanel('switch4', e.target.checked))} checked={this.state.switch4} label={'Disabled off'} disabled />
            <Switch onChange={e => (this.onControlPanel('switch5', e.target.checked))} checked={this.state.switch5} label={'Disabled on'} disabled />
          </div>
        }
      />
    );
  }
}

export default SwitchDocs;
