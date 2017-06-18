import AppBar from '../../../src/AppBar';
import AppBarDocs from '../../pages/AppBar';
import BottomNavigation from '../../pages/BottomNavigation';
import Button from '../../pages/Button';
import Collapse from '../../pages/Collapse';
import Dialog from '../../pages/Dialog';
import Grid from '../../pages/Grid';
import List from '../../pages/List';
import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
import {makeURL} from '../../utils/globals';
import Paper from '../../pages/Paper';
import React from 'react';
import {Route} from 'react-router-dom';
import SelectField from '../../pages/SelectField';
import SnackBar from '../../pages/SnackBar';
import Styles from './PageWrapper.css';
import Switch from '../../pages/Switch';
import SvgIcon from '../../../src/SvgIcon';
import Tabs from '../../pages/Tabs';
import TextField from '../../pages/TextField';
import Typography from '../../../src/Typography';
import TypographyDocs from '../../pages/Typography';
import Scrollable from '../../../src/Scrollable';

function Base() {
  return (
    <div>
      <Typography type="display2">Welcome.</Typography>
      <Typography component="p" type="display1">{"We're glad you're here."}</Typography>
      <Typography component="p" type="headline">Getting Started</Typography>
      <p style={{paddingTop: '10px'}}>
        <code style={{padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', textDecoration: 'line-through'}}>
          npm install material-react-components
        </code>
      </p>
    </div>
  );
}

class PageWrapper extends React.Component {
  render() {
    const pageName = window.location.pathname.split('/').pop();
    return (
      <div style={{overflow: 'hidden'}}>
        <Scrollable>
          <div style={{flex: '1 1 100%', width: 'calc(100vw - 250px)', overflowY: 'auto', height: '100%'}}>
            <AppBar
              primary={<SvgIcon className={Styles.icon} component={Menu} />}
              style={{width: '100%', color: '#fff'}}
            >
              {`<${pageName} />`}
            </AppBar>
            <div style={{margin: '50px'}}>
              <Route exact path={makeURL()} component={Base} />
              <Route path={makeURL('/AppBar')} component={AppBarDocs} />
              <Route path={makeURL('/BottomNavigation')} component={BottomNavigation} />
              <Route path={makeURL('/Button')} component={Button} />
              <Route path={makeURL('/Collapse')} component={Collapse} />
              <Route path={makeURL('/Dialog')} component={Dialog} />
              <Route path={makeURL('/Grid')} component={Grid} />
              <Route path={makeURL('/List')} component={List} />
              <Route path={makeURL('/Paper')} component={Paper} />
              <Route path={makeURL('/SelectField')} component={SelectField} />
              <Route path={makeURL('/SnackBar')} component={SnackBar} />
              <Route path={makeURL('/Switch')} component={Switch} />
              <Route path={makeURL('/Tabs')} component={Tabs} />
              <Route path={makeURL('/TextField')} component={TextField} />
              <Route path={makeURL('/Typography')} component={TypographyDocs} />
            </div>
          </div>
        </Scrollable>
      </div>
    );
  }
}

export default PageWrapper;
