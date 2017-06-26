import AppBar from '../../../src/AppBar';
import Colors from '../../../src/variables';
import CodeFormatter from '../../components/CodeFormatter';
import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
import Page from '../Page';
import React from 'react';
import Search from 'material-design-icons/action/svg/production/ic_search_24px.svg';
import SvgIcon from '../../../src/SvgIcon';
import Switch from '../../../src/Switch';
import TextField from '../../../src/TextField';

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
      <Page
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
              import { AppBar } from 'material-react-components';
              import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
              import Search from 'material-design-icons/action/svg/production/ic_search_24px.svg';
              import { SvgIcon } from 'material-react-components';

              <AppBar
                backgroundColor="${backgroundColor}"
                elevation={${elevation}}
                style={${style}}
                primary={${primary ? '<SvgIcon component={Menu} />' : null}}
                secondary={${secondary ? '<SvgIcon component={Search} />' : null}}
              >
                ${children}
              </AppBar>`
            }
          />
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('children', e.target.value))}
            label="children"
            value={children}
          />,
          <TextField
            type="number"
            onChange={e => (this.onControlPanel('elevation', e.target.value))}
            label="elevation"
            value={elevation}
          />,
          <TextField
            onChange={e => (this.onControlPanel('style', e.target.value))}
            label="Style"
            value={style}
          />,
          <Switch
            onChange={e => (this.onControlPanel('primary', e.target.checked))}
            checked={primary}
            label="primary"
          />,
          <Switch
            onChange={e => (this.onControlPanel('secondary', e.target.checked))}
            checked={secondary}
            label="secondary"
          />
        ]}
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
