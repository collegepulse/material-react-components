import {Link, NavLink} from 'react-router-dom';
import List, {ListItem} from '../../../src/List';
import {makeURL} from '../../utils/globals';
import Paper from '../../../src/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import Scrollable from '../../../src/Scrollable';
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
    label: 'Table',
    url: makeURL('/Table')
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

function Shared({onClick}) {
  return (
    <Scrollable>
      <Paper className={Styles.root}>
        <Typography className={Styles.title}>
          <Link to={makeURL()}>material-react-components</Link>
          <div className={Styles.subtitle}>By CollegePulse</div>
        </Typography>
        <List>
          {items.map(item => (
            <ListItem
              key={item.url}
              buttonProps={{
                activeClassName: Styles.active,
                component: NavLink,
                to: item.url,
                onClick
              }}
              className={Styles.inactive}
              primary={(
                <div className={Styles.primary}>
                  {item.label}
                </div>
              )}
            />
          ))}
        </List>
      </Paper>
    </Scrollable>
  );
}

Shared.defaultProps = {
  onClick: () => {}
};

Shared.propTypes = {
  onClick: PropTypes.func
};

export default Shared;

