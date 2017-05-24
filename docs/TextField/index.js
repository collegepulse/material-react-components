import TextField from '../../src/TextField';
import React from 'react';
import Colors from '../../src/variables';

class TextFieldDocs extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
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
      textFieldMultilineWithInitialMultilineValue: 'This textfield should have the proper height on initial render.'
    };
  }

  onChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>TextField</h1>
        <TextField onChange={e => (this.onChange(e, 'textFieldBaseline'))} value={this.state.textFieldBaseline} label={'Label'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldWithInitialValue'))} value={this.state.textFieldWithInitialValue} label={'Label'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldWithLongInitialValue'))} value={this.state.textFieldWithLongInitialValue} label={'Label'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldDisabled'))} value={this.state.textFieldDisabled} label={'Disabled'} disabled />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldWithPlaceholder'))} value={this.state.textFieldWithPlaceholder} label={'Label'} placeholder={'Placeholder'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldWithHelper'))} value={this.state.textFieldWithHelper} label={'Label'} helperText={'Helper text'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldWithError'))} value={this.state.textFieldWithError} label={'Error'} helperText={'This field has an error.'} errorColor={Colors.$red500} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldWithCustomColor'))} value={this.state.textFieldWithCustomColor} label={'Custom color'} helperText={'It\'s special.'} primaryColor={Colors.$orange700} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldMultilineBaseline'))} value={this.state.textFieldMultilineBaseline} label={'Label'} helperText={'Helper text'} multiline />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldMultilineBaselineWithPlaceholder'))} value={this.state.textFieldMultilineBaselineWithPlaceholder} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textFieldMultilineWithInitialMultilineValue'))} value={this.state.textFieldMultilineWithInitialMultilineValue} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
      </div>
    );
  }
}

export default TextFieldDocs;
