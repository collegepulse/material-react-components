import Colors from '../../src/variables';
import React from 'react';
import Switch from '../../src/Switch';

class SwitchDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch1: false,
      switch2: true,
      switch3: true,
      switch4: false,
      switch5: true
    };
  }

  onChange(e, key) {
    this.setState({
      [key]: e.target.checked
    });
  }

  render() {
    return (
      <div style={{maxWidth: '200px'}}>
        <h1>Switch</h1>
        <Switch onChange={e => (this.onChange(e, 'switch1'))} checked={this.state.switch1} label={'Switch #1'} />
        <Switch onChange={e => (this.onChange(e, 'switch2'))} checked={this.state.switch2} label={'Switch #2'} />
        <Switch onChange={e => (this.onChange(e, 'switch3'))} checked={this.state.switch3} label={'Custom Color'} primaryColor={Colors.$orange700} />
        <Switch onChange={e => (this.onChange(e, 'switch4'))} checked={this.state.switch4} label={'Disabled off'} disabled />
        <Switch onChange={e => (this.onChange(e, 'switch5'))} checked={this.state.switch5} label={'Disabled on'} disabled />
      </div>
    );
  }
}

export default SwitchDocs;
