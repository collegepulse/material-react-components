import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import Grid, {GridItem} from '../../../src/Grid';
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
      style: '{"width": "300px"}',
      arrowNavigation: false
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  render() {
    const {primary, secondary, avatar, action, style, arrowNavigation} = this.state;
    let styleObj = {};
    try {
      styleObj = JSON.parse(style);
    } catch (e) { }
    return (
      <Page
        componentName="List"
        buildYourOwn={
          <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
            <List arrowNavigation={arrowNavigation} style={styleObj}>
              {[1, 2, 3].map(key => (
                <ListItem
                  key={key}
                  primary={primary}
                  secondary={secondary}
                  avatar={avatar && <Folder />}
                  action={action && <SvgIcon component={MoreVert} />}
                />
              ))}
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
          />,
          <Switch
            onChange={e => (this.onControlPanel('arrowNavigation', e.target.checked))}
            checked={arrowNavigation}
            label="arrowNavigation"
          />
        ]}
        examples={
          <Grid gutter={8}>
            <GridItem xs={12} sm={6}>
              <List>
                {[1, 2, 3].map(key => (
                  <ListItem key={key} primary={'Primary'} />
                ))}
              </List>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <List>
                {[1, 2, 3].map(key => (
                  <ListItem
                    key={key}
                    primary={'Primary'}
                    action={<SvgIcon component={MoreVert} />}
                  />
                ))}
              </List>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <List>
                {[1, 2, 3].map(key => (
                  <ListItem
                    key={key}
                    avatar={<Folder />}
                    primary={'Primary'}
                    secondary={'Secondary'}
                  />
                ))}
              </List>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <List>
                {[1, 2, 3].map(key => (
                  <ListItem
                    key={key}
                    avatar={<Folder />}
                    primary={'Primary'}
                    secondary={'Secondary'}
                    action={<SvgIcon component={MoreVert} />}
                  />
                ))}
              </List>
            </GridItem>
          </Grid>
        }
      />
    );
  }
}

export default ListDocs;
