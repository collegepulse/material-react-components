import {Link, NavLink} from 'react-router-dom';
import List, {ListItem} from '../src/List';
import {makeURL} from './globals';
import Paper from '../src/Paper';
import React from 'react';
import Styles from './DocNavigation.css';
import Typography from '../src/Typography';

const items = [
  {
    label: 'AppBar',
    url: makeURL('/AppBar')
  },
  {
    label: 'BottomNavigation',
    url: makeURL('/BottomNavigation')
  },
  {
    label: 'Button',
    url: makeURL('/Button')
  },
  {
    label: 'Collapse',
    url: makeURL('/Collapse')
  },
  {
    label: 'Dialog',
    url: makeURL('/Dialog')
  },
  {
    label: 'List',
    url: makeURL('/List')
  },
  {
    label: 'Paper',
    url: makeURL('/Paper')
  },
  {
    label: 'SelectField',
    url: makeURL('/SelectField')
  },
  {
    label: 'SnackBar',
    url: makeURL('/SnackBar')
  },
  {
    label: 'Switch',
    url: makeURL('/Switch')
  },
  {
    label: 'Tabs',
    url: makeURL('/Tabs')
  },
  {
    label: 'TextField',
    url: makeURL('/TextField')
  },
  {
    label: 'Typography',
    url: makeURL('/Typography')
  }
];

function DocNavigation() {
  return (
    <div style={{flex: '0 0 auto', width: '200px'}}>
      <Paper style={{borderRight: '1px solid #ddd', flex: '1 0 auto', height: '100vh', position: 'fixed', overflowY: 'scroll', zIndex: 1}}>
        <Typography style={{padding: '15px'}}>
          <Link to={makeURL()}>material-react-components</Link>
          <div style={{marginTop: '5px'}}>By CollegePulse</div>
        </Typography>
        <List>
          {items.map(item => (
            <ListItem
              key={item.url}
              component={NavLink}
              activeClassName={Styles.active}
              className={Styles.inactive}
              primary={(
                <div className={Styles.primary}>
                  {item.label}
                </div>
              )}
              to={item.url}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default DocNavigation;
