import Colors from '../../src/variables';
import DocPage from '../DocPage';
import React from 'react';
import Switch from '../../src/Switch';
import TextField from '../../src/TextField';

class TextFieldDocs extends React.Component {

  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      label: 'Label',
      value: '',
      disabled: false,
      placeholder: 'Placeholder',
      helperText: 'Helper text',
      primaryColor: Colors.$primary,
      multiline: false,
      errorColor: '',

      textFieldBaseline: '',
      textFieldWithInitialValue: 'Value',
      textFieldWithLongInitialValue: 'This is a lot of text and it should overflow appropriately.',
      textFieldDisabled: '',
      textFieldWithPlaceholder: '',
      textFieldWithHelper: '',
      textFieldWithError: '',
      textFieldWithCustomColor: '',
      textFieldMultilineBaseline: '',
      textFieldMultilineBaselineWithPlaceholder: '',
      textFieldMultilineWithInitialMultilineValue: 'This textfield should have the proper height on initial render because it has extra content.'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {label, helperText, placeholder, primaryColor,
      errorColor, value, disabled, multiline} = this.state;
    return (
      <DocPage
        componentName="TextField"
        buildYourOwn={
          <TextField
            onChange={e => (this.onControlPanel('value', e.target.value))}
            label={label}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            helperText={helperText}
            primaryColor={primaryColor}
            multiline={multiline}
            errorColor={errorColor}
          />
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('label', e.target.value))}
                label="label"
                value={label}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('helperText', e.target.value))}
                label="helperText"
                value={helperText}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('placeholder', e.target.value))}
                label="placeholder"
                value={placeholder}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('primaryColor', e.target.value))}
                label="primaryColor"
                value={primaryColor}
                helperText="Label and inkbar color on :focus and :active states"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('errorColor', e.target.value))}
                label="errorColor"
                value={errorColor}
                helperText="Styles the label, inkbar, and helper text"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('value', e.target.value))}
                label="value"
                value={value}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <Switch
                onChange={e => (this.onControlPanel('disabled', e.target.checked))}
                checked={disabled}
                label="disabled"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <Switch
                onChange={e => (this.onControlPanel('multiline', e.target.checked))}
                checked={multiline}
                label="multiline"
              />
            </div>
          </div>
        }
        examples={
          <div>
            <TextField onChange={e => (this.onChange('textFieldBaseline', e.target.value))} value={this.state.textFieldBaseline} label={'Label'} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldWithInitialValue', e.target.value))} value={this.state.textFieldWithInitialValue} label={'Label'} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldWithLongInitialValue', e.target.value))} value={this.state.textFieldWithLongInitialValue} label={'Label'} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldDisabled', e.target.value))} value={this.state.textFieldDisabled} label={'Disabled'} disabled />
            <br />
            <TextField onChange={e => (this.onChange('textFieldWithPlaceholder', e.target.value))} value={this.state.textFieldWithPlaceholder} label={'Label'} placeholder={'Placeholder'} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldWithHelper', e.target.value))} value={this.state.textFieldWithHelper} label={'Label'} helperText={'Helper text'} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldWithError', e.target.value))} value={this.state.textFieldWithError} label={'Error'} helperText={'This field has an error.'} errorColor={Colors.$red500} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldWithCustomColor', e.target.value))} value={this.state.textFieldWithCustomColor} label={'Custom color'} helperText={'It\'s special.'} primaryColor={Colors.$orange700} />
            <br />
            <TextField onChange={e => (this.onChange('textFieldMultilineBaseline', e.target.value))} value={this.state.textFieldMultilineBaseline} label={'Label'} helperText={'Helper text'} multiline />
            <br />
            <TextField onChange={e => (this.onChange('textFieldMultilineBaselineWithPlaceholder', e.target.value))} value={this.state.textFieldMultilineBaselineWithPlaceholder} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
            <br />
            <TextField onChange={e => (this.onChange('textFieldMultilineWithInitialMultilineValue', e.target.value))} value={this.state.textFieldMultilineWithInitialMultilineValue} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
          </div>
        }
      />
    );
  }
}

export default TextFieldDocs;
