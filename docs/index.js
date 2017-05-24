import AppBar from '../src/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Listing from './Listing';
import React from 'react';
import {render} from 'react-dom';

injectTapEventPlugin();

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

function Index() {
  return (
    <div>
      <AppBar
        style={{
          fontSize: '20px',
          color: 'white',
          position: 'fixed',
          width: '100%',
          zIndex: 2500
        }}
      >
        material-react-components
      </AppBar>
      <div style={{height: '64px'}} />
      <Listing />
    </div>
  );
}

render(<Index />, document.getElementById('app'));
