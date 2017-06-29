import Colors from '../../../src/variables';
import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import React from 'react';
import Switch from '../../../src/Switch';
import TextField from '../../../src/TextField';

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
      width: '300px',
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
      errorColor, value, disabled, multiline, width} = this.state;
    return (
      <Page
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
            width={width}
          />
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('label', e.target.value))}
            label="label"
            value={label}
          />,
          <TextField
            onChange={e => (this.onControlPanel('helperText', e.target.value))}
            label="helperText"
            value={helperText}
          />,
          <TextField
            onChange={e => (this.onControlPanel('placeholder', e.target.value))}
            label="placeholder"
            value={placeholder}
          />,
          <TextField
            onChange={e => (this.onControlPanel('primaryColor', e.target.value))}
            label="primaryColor"
            value={primaryColor}
            helperText="Label and inkbar color on :focus and :active states"
          />,
          <TextField
            onChange={e => (this.onControlPanel('errorColor', e.target.value))}
            label="errorColor"
            value={errorColor}
            helperText="Styles the label, inkbar, and helper text"
          />,
          <TextField
            onChange={e => (this.onControlPanel('value', e.target.value))}
            label="value"
            value={value}
          />,
          <TextField
            onChange={e => (this.onControlPanel('width', e.target.value))}
            label="width"
            value={width}
          />,
          <Switch
            onChange={e => (this.onControlPanel('disabled', e.target.checked))}
            checked={disabled}
            label="disabled"
          />,
          <Switch
            onChange={e => (this.onControlPanel('multiline', e.target.checked))}
            checked={multiline}
            label="multiline"
          />
        ]}
        examples={
          <Grid gutter={24}>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldBaseline', e.target.value))} value={this.state.textFieldBaseline} label={'Label'} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldWithInitialValue', e.target.value))} value={this.state.textFieldWithInitialValue} label={'Label'} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldWithLongInitialValue', e.target.value))} value={this.state.textFieldWithLongInitialValue} label={'Label'} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldDisabled', e.target.value))} value={this.state.textFieldDisabled} label={'Disabled'} disabled />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldWithPlaceholder', e.target.value))} value={this.state.textFieldWithPlaceholder} label={'Label'} placeholder={'Placeholder'} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldWithHelper', e.target.value))} value={this.state.textFieldWithHelper} label={'Label'} helperText={'Helper text'} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldWithError', e.target.value))} value={this.state.textFieldWithError} label={'Error'} helperText={'This field has an error.'} errorColor={Colors.$red500} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldWithCustomColor', e.target.value))} value={this.state.textFieldWithCustomColor} label={'Custom color'} helperText={'It\'s special.'} primaryColor={Colors.$orange700} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldMultilineBaseline', e.target.value))} value={this.state.textFieldMultilineBaseline} label={'Label'} placeholder={'Placeholder'} helperText={'Helper text'} />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldMultilineBaselineWithPlaceholder', e.target.value))} value={this.state.textFieldMultilineBaselineWithPlaceholder} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
            </GridItem>
            <GridItem xs={12} sm={4}>
              <TextField onChange={e => (this.onControlPanel('textFieldMultilineWithInitialMultilineValue', e.target.value))} value={this.state.textFieldMultilineWithInitialMultilineValue} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
            </GridItem>
          </Grid>
        }
      />
    );
  }
}

export default TextFieldDocs;
