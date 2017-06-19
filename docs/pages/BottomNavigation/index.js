import BottomNavigation, {BottomNavigationItem} from '../../../src/BottomNavigation';
import Page from '../Page';
import React from 'react';
import TextField from '../../../src/TextField';

class BottomNavigationDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      label: 'label'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {label} = this.state;
    return (
      <Page
        componentName="BottomNavigation"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <BottomNavigation>
              {[1, 2, 3].map(key => (
                <BottomNavigationItem key={key}>{label}</BottomNavigationItem>
              ))}
            </BottomNavigation>
          </div>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('label', e.target.value))}
            label="label"
            value={label}
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
