import DocPage from '../DocPage';
import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import List, {ListItem} from '../../src/List';
import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import React from 'react';
import Switch from '../../src/Switch';
import SvgWrapper from '../../src/SvgWrapper';
import TextField from '../../src/TextField';

class ListDocs extends React.Component {

  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      primary: 'Primary',
      secondary: 'Secondary',
      avatar: true,
      action: true
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {primary, secondary, avatar, action} = this.state;
    return (
      <DocPage
        componentName="List"
        buildYourOwn={
          <div style={{flex: 1}}>
            <List>
              <ListItem primary={primary} secondary={secondary} avatar={avatar && <SvgWrapper component={Folder} />} action={action && <SvgWrapper component={MoreVert} />} />
              <ListItem primary={primary} secondary={secondary} avatar={avatar && <SvgWrapper component={Folder} />} action={action && <SvgWrapper component={MoreVert} />} />
              <ListItem primary={primary} secondary={secondary} avatar={avatar && <SvgWrapper component={Folder} />} action={action && <SvgWrapper component={MoreVert} />} />
            </List>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '33%'}}>
              <TextField
                onChange={e => (this.onControlPanel('primary', e.target.value))}
                label="primary"
                value={primary}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '33%'}}>
              <TextField
                onChange={e => (this.onControlPanel('secondary', e.target.value))}
                label="secondary"
                value={secondary}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '33%'}}>
              <Switch
                onChange={e => (this.onControlPanel('avatar', e.target.checked))}
                checked={avatar}
                label="avatar"
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '33%'}}>
              <Switch
                onChange={e => (this.onControlPanel('action', e.target.checked))}
                checked={action}
                label="action"
              />
            </div>
          </div>
        }
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
              <ListItem avatar={<SvgWrapper component={Folder} />} primary={'Primary'} />
              <ListItem avatar={<SvgWrapper component={Folder} />} primary={'Primary'} />
              <ListItem avatar={<SvgWrapper component={Folder} />} primary={'Primary'} />
            </List>
            <br />
            <List>
              <ListItem avatar={<SvgWrapper component={Folder} />} primary={'Primary'} secondary={'Secondary'} action={<SvgWrapper component={MoreVert} />} />
              <ListItem avatar={<SvgWrapper component={Folder} />} primary={'Primary'} secondary={'Secondary'} action={<SvgWrapper component={MoreVert} />} />
              <ListItem avatar={<SvgWrapper component={Folder} />} primary={'Primary'} secondary={'Secondary'} action={<SvgWrapper component={MoreVert} />} />
            </List>
          </div>
        }
      />
    );
  }
}

export default ListDocs;
