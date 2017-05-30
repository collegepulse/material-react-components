import Folder from 'material-design-icons/file/svg/design/ic_folder_24px.svg';
import List, {ListItem} from '../../src/List';
import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import React from 'react';
import SvgWrapper from '../../src/SvgWrapper';

function ListDocs() {
  return (
    <div style={{width: '250px'}}>
      <h1>List</h1>
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
  );
}

export default ListDocs;
