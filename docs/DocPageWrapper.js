import AppBar from '../src/AppBar';
import AppBarDocs from './AppBar';
import BottomNavigation from './BottomNavigation';
import Button from './Button';
import Collapse from './Collapse';
import Dialog from './Dialog';
import List from './List';
import {makeURL} from './globals';
import Paper from './Paper';
import React from 'react';
import {Route} from 'react-router-dom';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';
import Typography from '../src/Typography';
import TypographyDocs from './Typography';

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

class DocPageWrapper extends React.Component {
  render() {
    const pageName = window.location.pathname.split('/').pop();
    return (
      <div style={{width: '100%', height: '100vh', overflow: 'hidden'}}>
        <div style={{height: '100%', overflowY: 'scroll'}}>
          <AppBar style={{width: '100%', color: '#fff'}}>{`<${pageName} />`}</AppBar>
          <div style={{margin: '50px'}}>
            <Route exact path={makeURL()} component={Base} />
            <Route path={makeURL('/AppBar')} component={AppBarDocs} />
            <Route path={makeURL('/BottomNavigation')} component={BottomNavigation} />
            <Route path={makeURL('/Button')} component={Button} />
            <Route path={makeURL('/Collapse')} component={Collapse} />
            <Route path={makeURL('/Dialog')} component={Dialog} />
            <Route path={makeURL('/List')} component={List} />
            <Route path={makeURL('/Paper')} component={Paper} />
            <Route path={makeURL('/Switch')} component={Switch} />
            <Route path={makeURL('/Tabs')} component={Tabs} />
            <Route path={makeURL('/TextField')} component={TextField} />
            <Route path={makeURL('/Typography')} component={TypographyDocs} />
          </div>
        </div>
      </div>
    );
  }
}

export default DocPageWrapper;
