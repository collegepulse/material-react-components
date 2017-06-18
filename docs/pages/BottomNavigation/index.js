import BottomNavigation, {BottomNavigationItem} from '../../../src/BottomNavigation';
import Page from '../Page';
import React from 'react';
import TextField from '../../../src/TextField';

class BottomNavigationDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      label1: 'label1',
      label2: 'label2',
      label3: 'label3',
      style: '{"maxWidth": "270px"}'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {label1, label2, label3, style} = this.state;
    let styleObj;
    try {
      styleObj = JSON.parse(style);
    } catch (e) {
      styleObj = {};
    }
    return (
      <Page
        componentName="BottomNavigation"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <BottomNavigation style={styleObj}>
              <BottomNavigationItem>{label1}</BottomNavigationItem>
              <BottomNavigationItem>{label2}</BottomNavigationItem>
              <BottomNavigationItem>{label3}</BottomNavigationItem>
            </BottomNavigation>
          </div>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('label1', e.target.value))}
            label="label1"
            value={label1}
          />,
          <TextField
            onChange={e => (this.onControlPanel('label2', e.target.value))}
            label="label2"
            value={label2}
          />,
          <TextField
            onChange={e => (this.onControlPanel('label3', e.target.value))}
            label="label3"
            value={label3}
          />,
          <TextField
            onChange={e => (this.onControlPanel('style', e.target.value))}
            label="Style"
            value={style}
            helperText="JSON will be converted to a style object"
          />
        ]}
        examples={
          <div>
            <BottomNavigation style={{maxWidth: '270px'}}>
              <BottomNavigationItem>Foo</BottomNavigationItem>
              <BottomNavigationItem>Bar</BottomNavigationItem>
              <BottomNavigationItem>Baz</BottomNavigationItem>
            </BottomNavigation>
          </div>
        }
      />
    );
  }

}

export default BottomNavigationDocs;
