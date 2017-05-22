import BottomNavigation from './BottomNavigation';
import FlatButton from './FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {render} from 'react-dom';
import TextField from './TextField';

injectTapEventPlugin();

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

function Docs() {
  return (
    <div>
      <BottomNavigation />
      <FlatButton />
      <TextField />
    </div>
  );
}

render(<Docs />, document.getElementById('app'));
