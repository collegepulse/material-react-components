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
      label: 'Color',
      value: '{"id": 2, "value": "orange"}',
      style: '{}',
      data: `[
        {"id": 1, "value": "red"},
        {"id": 2, "value": "orange"},
        {"id": 3, "value": "yellow"},
        {"id": 4, "value": "green"},
        {"id": 5, "value": "blue"},
        {"id": 6, "value": "indigo"},
        {"id": 7, "value": "violet"}
      ]`.replace(/ +/g, ' '),
      iterator: 'function iterator(obj) { return {key: obj.id, value: obj.value}; }',
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {disabled, errorColor, helperText, label, value, style, data, iterator} = this.state;
    let dataObj = {};
    let styleObj = {};
    let valueObj = {};
    try {
      window.eval(iterator); // eslint-disable-line no-eval
      dataObj = JSON.parse(data);
      styleObj = JSON.parse(style);
      valueObj = JSON.parse(value);
    } catch (e) { }
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
                label={label}
                style={styleObj}
                data={dataObj}
                iterator={window.iterator}
                value={valueObj}
                onChange={(e, index, datum) => (
                  this.setState({value: JSON.stringify(datum)})
                )}
              />
            </GridItem>
          </Grid>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('errorColor', e.target.value))}
            label="errorColor"
            value={errorColor}
          />,
          <TextField
            onChange={e => (this.onControlPanel('helperText', e.target.value))}
            label="helperText"
            value={helperText}
          />,
          <TextField
            onChange={e => (this.onControlPanel('label', e.target.value))}
            label="label"
            value={label}
          />,
          <TextField
            onChange={e => (this.onControlPanel('value', e.target.value))}
            label="value"
            value={value}
          />,
          <TextField
            onChange={e => (this.onControlPanel('style', e.target.value))}
            label="style"
            value={style}
          />,
          <TextField
            onChange={e => (this.onControlPanel('data', e.target.value))}
            label="data"
            value={data}
            helperText="Will be parsed using JSON.parse(...)"
          />,
          <TextField
            onChange={e => (this.onControlPanel('iterator', e.target.value))}
            label="iterator"
            value={iterator}
            helperText="Used to extract key/value pair from data objects"
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
