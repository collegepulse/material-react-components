import TextField from '../../src/TextField';
import React from 'react';
import Colors from '../../src/variables';

class TextFieldDocs extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      textField0: '',
      textField1: 'Value',
      textField2: '',
      textField3: '',
      textField4: '',
      textField5: '',
      textField6: '',
      textField7: '',
      textField8: '',
      textField9: 'This textfield should have the proper height on initial render.'
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
        <TextField onChange={e => (this.onChange(e, 'textField0'))} value={this.state.textField0} label={'Label'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField1'))} value={this.state.textField1} label={'Label'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField2'))} value={this.state.textField2} label={'Label'} placeholder={'Placeholder'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField3'))} value={this.state.textField3} label={'Label'} helperText={'Helper text'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField4'))} value={this.state.textField4} label={'Error'} helperText={'This field has an error.'} errorColor={Colors.$red500} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField5'))} value={this.state.textField5} label={'Custom color'} helperText={'It\'s special.'} primaryColor={Colors.$orange700} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField6'))} value={this.state.textField6} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField7'))} value={this.state.textField7} label={'Label'} helperText={'Helper text'} multiline />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField8'))} value={this.state.textField8} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
        <br />
        <TextField onChange={e => (this.onChange(e, 'textField9'))} value={this.state.textField9} label={'Label'} helperText={'Helper text'} placeholder={'Placeholder'} multiline />
      </div>
    );
  }
}

export default TextFieldDocs;
