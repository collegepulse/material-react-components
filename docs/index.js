import {BrowserRouter} from 'react-router-dom';
import DocNavigation from './DocNavigation';
import DocPageWrapper from './DocPageWrapper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';

injectTapEventPlugin();

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

function Index() {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <DocNavigation />
        <DocPageWrapper />
      </div>
    </BrowserRouter>
  );
}

render(<Index />, document.getElementById('app'));
