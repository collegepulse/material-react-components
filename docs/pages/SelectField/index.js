import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import React from 'react';
import SelectField from '../../../src/SelectField';
import Switch from '../../../src/Switch';
import TextField from '../../../src/TextField';

class SelectFieldDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      disabled: false,
      errorColor: '',
      helperText: 'Pick your favorite color',
      id: 'id',
      label: 'Color',
      value: '',
      style: '{}',
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {disabled, errorColor, helperText, id, label, value, style} = this.state;
    let styleObj = {};
    try {
      styleObj = JSON.parse(style);
    } catch (e) { }

    const selectOptions = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet'
    ];
    return (
      <Page
        componentName="SelectField"
        buildYourOwn={
          <Grid gutter={24} style={{justifyContent: 'center'}}>
            <GridItem xs={12} sm={6} md={4}>
              <SelectField
                disabled={disabled}
                errorColor={errorColor}
                helperText={helperText}
                id={id}
                label={label}
                style={styleObj}
                value={value}
                onChange={(e) => {
                  this.setState({value: e.target.value})
                }}
              >
                <option value="" />
                {selectOptions.map(value => (
                  <option
                    key={value}
                    value={value}
                  >
                    {value.charAt(0).toUpperCase() + value.substr(1)}
                  </option>
                ))}
              </SelectField>
            </GridItem>
          </Grid>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('errorColor', e.target.value))}
            label="errorColor"
            helperText="If present, sets aria-invalid to true"
            value={errorColor}
          />,
          <TextField
            onChange={e => (this.onControlPanel('helperText', e.target.value))}
            label="helperText"
            helperText="Overflows onto a second line"
            value={helperText}
          />,
          <TextField
            onChange={e => (this.onControlPanel('id', e.target.value))}
            label="id"
            helperText="Binds label and select elements for a11y"
            value={id}
          />,
          <TextField
            onChange={e => (this.onControlPanel('label', e.target.value))}
            label="label"
            helperText="Truncated to a single line"
            value={label}
          />,
          <TextField
            onChange={e => (this.onControlPanel('value', e.target.value))}
            label="value"
            helperText="Value of selected option"
            value={value}
          />,
          <TextField
            onChange={e => (this.onControlPanel('style', e.target.value))}
            label="style"
            helperText="Applied to the select element"
            value={style}
          />,
          <Switch
            onChange={e => (this.onControlPanel('disabled', e.target.checked))}
            checked={disabled}
            label="disabled"
          />
        ]}
      />
    );
  }
}

export default SelectFieldDocs;
