import AppBar from '../../../src/AppBar';
import AppBarDocs from '../../pages/AppBar';
import BottomNavigation from '../../pages/BottomNavigation';
import Button from '../../pages/Button';
import Collapse from '../../pages/Collapse';
import Dialog from '../../pages/Dialog';
import Grid from '../../pages/Grid';
import HomePage from '../HomePage';
import List from '../../pages/List';
import Mobile from '../Navigation/Mobile';
import Menu from 'material-design-icons/navigation/svg/production/ic_menu_24px.svg';
import {makeURL} from '../../utils/globals';
import Paper from '../../pages/Paper';
import React from 'react';
import {Route} from 'react-router-dom';
import Scrollable from '../../../src/Scrollable';
import SelectField from '../../pages/SelectField';
import SnackBar from '../../pages/SnackBar';
import Styles from './PageWrapper.css';
import Switch from '../../pages/Switch';
import SvgIcon from '../../../src/SvgIcon';
import Tabs from '../../pages/Tabs';
import TextField from '../../pages/TextField';
import TypographyDocs from '../../pages/Typography';

class PageWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      open: false
    };
  }

  onClick() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const pageName = window.location.pathname.split('/').pop();
    return (
      <div className={Styles.root}>
        <Scrollable>
          <div className={Styles.rootInner}>
            <AppBar
              className={Styles.appBar}
              primary={
                <span className={Styles.iconWrapper}>
                  <SvgIcon
                    className={Styles.icon}
                    component={Menu}
                    onClick={this.onClick}
                  />
                </span>
              }
              style={{width: '100%', color: '#fff'}}
            >
              {`<${pageName} />`}
            </AppBar>
            <Mobile open={this.state.open} onClose={this.onClick} />
            <div className={Styles.content}>
              <Route exact path={makeURL()} component={HomePage} />
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
