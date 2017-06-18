import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import List, {ListItem} from '../../../src/List';
import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import Page from '../Page';
import React from 'react';
import Switch from '../../../src/Switch';
import SvgIcon from '../../../src/SvgIcon';
import TextField from '../../../src/TextField';

class ListDocs extends React.Component {

  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      primary: 'Primary',
      secondary: 'Secondary',
      avatar: true,
      action: true,
      style: '{"width": "300px"}'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {primary, secondary, avatar, action, style} = this.state;
    let styleObj = {};
    try {
      styleObj = JSON.parse(style);
    } catch (e) { }
    return (
      <Page
        componentName="List"
        buildYourOwn={
          <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <List style={styleObj}>
              <ListItem primary={primary} secondary={secondary} avatar={avatar && <Folder />} action={action && <SvgIcon component={MoreVert} />} />
              <ListItem primary={primary} secondary={secondary} avatar={avatar && <Folder />} action={action && <SvgIcon component={MoreVert} />} />
              <ListItem primary={primary} secondary={secondary} avatar={avatar && <Folder />} action={action && <SvgIcon component={MoreVert} />} />
            </List>
          </div>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('primary', e.target.value))}
            label="primary"
            value={primary}
            helperText="&nbsp;"
          />,
          <TextField
            onChange={e => (this.onControlPanel('secondary', e.target.value))}
            label="secondary"
            value={secondary}
            helperText="&nbsp;"
          />,
          <TextField
            onChange={e => (this.onControlPanel('style', e.target.value))}
            label="style"
            value={style}
            helperText="JSON will be converted to a style object"
          />,
          <Switch
            onChange={e => (this.onControlPanel('avatar', e.target.checked))}
            checked={avatar}
            label="avatar"
          />,
          <Switch
            onChange={e => (this.onControlPanel('action', e.target.checked))}
            checked={action}
            label="action"
          />
        ]}
        examples={
          <div style={{}}>
            <List>
              <ListItem primary={'Primary'} />
              <ListItem primary={'Primary'} />
              <ListItem primary={'Primary'} />
            </List>
            <br />
            <List>
              <ListItem primary={'Primary'} secondary={'Secondary'} />
              <ListItem primary={'Primary'} secondary={'Secondary'} />
              <ListItem primary={'Primary'} secondary={'Secondary'} />
            </List>
            <br />
            <List>
              <ListItem avatar={<Folder />} primary={'Primary'} />
              <ListItem avatar={<Folder />} primary={'Primary'} />
              <ListItem avatar={<Folder />} primary={'Primary'} />
            </List>
            <br />
            <List>
              <ListItem avatar={<Folder />} primary={'Primary'} secondary={'Secondary'} action={<SvgIcon component={MoreVert} />} />
              <ListItem avatar={<Folder />} primary={'Primary'} secondary={'Secondary'} action={<SvgIcon component={MoreVert} />} />
              <ListItem avatar={<Folder />} primary={'Primary'} secondary={'Secondary'} action={<SvgIcon component={MoreVert} />} />
            </List>
          </div>
        }
      />
    );
  }
}

export default ListDocs;
