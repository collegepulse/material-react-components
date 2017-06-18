import React from 'react';
import Styles from './HomePage.css';
import Typography from '../../../src/Typography';

function Base() {
  return (
    <div>
      <Typography type="display2">
        Welcome.
      </Typography>
      <Typography
        component="p"
        type="display1"
      >
        {"We're glad you're here."}
      </Typography>
      <Typography
        component="p"
        type="headline"
      >
        Getting Started
      </Typography>
      <p className={Styles.codeWrapper}>
        <code className={Styles.code}>
          npm install material-react-components
        </code>
      </p>
    </div>
  );
}

export default Base;
