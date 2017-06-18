import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import PageWrapper from './components/PageWrapper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import {render} from 'react-dom';
import Styles from './index.css';
import 'babel-polyfill';

injectTapEventPlugin();

const app = document.createElement('div');
app.style.height = '100%';
document.body.appendChild(app);

function Index() {
  return (
    <BrowserRouter>
      <div className={Styles.index}>
        <Navigation />
        <PageWrapper />
      </div>
    </BrowserRouter>
  );
}

render(<Index />, app);
