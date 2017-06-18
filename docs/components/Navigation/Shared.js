import {Link, NavLink} from 'react-router-dom';
import List, {ListItem} from '../../../src/List';
import {makeURL} from '../../utils/globals';
import Paper from '../../../src/Paper';
import React from 'react';
import Styles from './Shared.css';
import Typography from '../../../src/Typography';

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
    label: 'Grid',
    url: makeURL('/Grid')
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

function Shared() {
  return (
    <Paper className={Styles.root}>
      <Typography className={Styles.title}>
        <Link to={makeURL()}>material-react-components</Link>
        <div className={Styles.subtitle}>By CollegePulse</div>
      </Typography>
      <List>
        {items.map(item => (
          <ListItem
            key={item.url}
            component={NavLink}
            activeClassName={Styles.active}
            className={Styles.inactive}
            to={item.url}
            primary={(
              <div className={Styles.primary}>
                {item.label}
              </div>
            )}
          />
        ))}
      </List>
    </Paper>
  );
}

export default Shared;

