import Colors from '../../../src/variables';
import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import React from 'react';
import Switch from '../../../src/Switch';
import TextField from '../../../src/TextField';

class SwitchDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      checked: true,
      disabled: false,
      label: 'Switch Label',
      primaryColor: Colors.$primary,
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
    const {checked, disabled, label, primaryColor} = this.state;
    return (
      <Page
        componentName="Switch"
        buildYourOwn={
          <div style={{flex: 1}}>
            <Switch
              onChange={e => (this.onControlPanel('checked', e.target.checked))}
              disabled={disabled}
              label={label}
              checked={checked}
              primaryColor={primaryColor}
              style={{justifyContent: 'center'}}
            />
          </div>
        }
        buildYourOwnControlPanel={[
          <Switch
            onChange={e => (this.onControlPanel('checked', e.target.checked))}
            checked={checked}
            label="checked"
          />,
          <Switch
            onChange={e => (this.onControlPanel('disabled', e.target.checked))}
            checked={disabled}
            label="disabled"
          />,
          <TextField
            onChange={e => (this.onControlPanel('label', e.target.value))}
            label="label"
            value={label}
          />,
          <TextField
            onChange={e => (this.onControlPanel('primaryColor', e.target.value))}
            label="primaryColor"
            value={primaryColor}
          />
        ]}
        examples={
          <Grid>
            <GridItem xs={6} md={3}>
              <Switch
                onChange={e => (this.onControlPanel('switch1', e.target.checked))}
                checked={this.state.switch1}
                label={'Switch #1'}
              />
            </GridItem>
            <GridItem xs={6} md={3}>
              <Switch
                onChange={e => (this.onControlPanel('switch2', e.target.checked))}
                checked={this.state.switch2}
                label={'Switch #2'}
              />
            </GridItem>
            <GridItem xs={6} md={3}>
              <Switch
                onChange={e => (this.onControlPanel('switch3', e.target.checked))}
                checked={this.state.switch3}
                label={'Custom Color'}
                primaryColor={Colors.$orange700}
              />
            </GridItem>
            <GridItem xs={6} md={3}>
              <Switch
                onChange={e => (this.onControlPanel('switch4', e.target.checked))}
                checked={this.state.switch4}
                label={'Disabled off'}
                disabled
              />
            </GridItem>
            <GridItem xs={6} md={3}>
              <Switch
                onChange={e => (this.onControlPanel('switch5', e.target.checked))}
                checked={this.state.switch5}
                label={'Disabled on'}
                disabled
              />
            </GridItem>
          </Grid>
        }
      />
    );
  }
}

export default SwitchDocs;
