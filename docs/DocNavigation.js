import {Link, NavLink} from 'react-router-dom';
import List, {ListItem} from '../src/List';
import {makeURL} from './globals';
import React from 'react';
import Styles from './DocNavigation.css';
import Typography from '../src/Typography';

function DocNavigation() {
  return (
    <div style={{backgroundColor: '#fff', minHeight: '100vh', maxHeight: '100vh', width: '250px', overflow: 'hidden', zIndex: 1, borderRight: '1px solid #ddd'}}>
      <div style={{overflowY: 'scroll', height: '100%'}}>
        <div style={{padding: '15px'}}>
          <Typography>
            <Link to={makeURL()}>material-react-components</Link>
            <div style={{marginTop: '5px'}}>By CollegePulse</div>
          </Typography>
        </div>
        <List>
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'AppBar'} to={makeURL('/AppBar')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'BottomNavigation'} to={makeURL('/BottomNavigation')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Button'} to={makeURL('/Button')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Collapse'} to={makeURL('/Collapse')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Dialog'} to={makeURL('/Dialog')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'List'} to={makeURL('/List')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Paper'} to={makeURL('/Paper')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Switch'} to={makeURL('/Switch')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Tabs'} to={makeURL('/Tabs')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'TextField'} to={makeURL('/TextField')} />
          <ListItem component={NavLink} activeClassName={Styles.active} className={Styles.inactive} primary={'Typography'} to={makeURL('/Typography')} />
        </List>
      </div>
    </div>
  );
}

export default DocNavigation;
