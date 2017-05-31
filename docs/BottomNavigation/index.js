import BottomNavigation, {BottomNavigationItem} from '../../src/BottomNavigation';
import DocPage from '../DocPage';
import React from 'react';
import TextField from '../../src/TextField';

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
      <DocPage
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
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('label1', e.target.value))}
                label="label1"
                value={label1}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('label2', e.target.value))}
                label="label2"
                value={label2}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('label3', e.target.value))}
                label="label3"
                value={label3}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '100%'}}>
              <TextField
                onChange={e => (this.onControlPanel('style', e.target.value))}
                label="Style"
                value={style}
                helperText="JSON will be converted to a style object"
              />
            </div>
          </div>
        }
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
