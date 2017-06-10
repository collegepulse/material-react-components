import AppBar from '../../src/AppBar';
import Colors from '../../src/variables';
import CodeFormatter from '../utils/CodeFormatter';
import DocPage from '../DocPage';
import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
import React from 'react';
import Search from 'material-design-icons/action/svg/production/ic_search_24px.svg';
import SvgIcon from '../../src/SvgIcon';
import Switch from '../../src/Switch';
import TextField from '../../src/TextField';

class AppBarDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      backgroundColor: Colors.$primary,
      children: 'AppBar',
      elevation: '2',
      style: '{"fill": "#FFF"}',
      primary: true,
      secondary: true
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {backgroundColor, children, elevation, primary, secondary, style} = this.state;
    let elevationNum;
    let styleObj;
    try {
      elevationNum = Number(this.state.elevation);
      styleObj = JSON.parse(style);
    } catch (e) {
      styleObj = {};
    }
    return (
      <DocPage
        componentName="AppBar"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <AppBar
              backgroundColor={backgroundColor}
              elevation={elevationNum}
              style={styleObj}
              primary={primary && <SvgIcon component={Menu} />}
              secondary={secondary && <SvgIcon component={Search} />}
            >
              {children}
            </AppBar>
          </div>
        }
        buildYourOwnCode={
          <CodeFormatter
            code={`
              import AppBar from 'material-react-components/AppBar';
              import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
              import Search from 'material-design-icons/action/svg/production/ic_search_24px.svg';
              import SvgIcon from 'material-react-components/SvgIcon';

              <AppBar
                backgroundColor="${backgroundColor}"
                elevation={${elevation}}
                style={${style}}
                primary={${primary ? '<SvgIcon component={Menu} />' : null}}
                secondary={${secondary ? '<SvgIcon component={Search} />' : null}}
              >
                ${children}
              </AppBar>
            `}
          />
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('backgroundColor', e.target.value))}
                label="backgroundColor"
                value={backgroundColor}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('children', e.target.value))}
                label="children"
                value={children}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                type="number"
                onChange={e => (this.onControlPanel('elevation', e.target.value))}
                label="elevation"
                value={elevation}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('style', e.target.value))}
                label="Style"
                value={style}
                helperText="JSON will be converted to a style object and applied to the <AppBar />"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <Switch
                onChange={e => (this.onControlPanel('primary', e.target.checked))}
                checked={primary}
                label="primary"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <Switch
                onChange={e => (this.onControlPanel('secondary', e.target.checked))}
                checked={secondary}
                label="secondary"
              />
            </div>
          </div>
        }
        examples={
          <div>
            <AppBar elevation={2} style={{color: 'white'}}>
              AppBar
            </AppBar>
          </div>
        }
      />
    );
  }
}

export default AppBarDocs;
