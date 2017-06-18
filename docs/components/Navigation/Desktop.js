import React from 'react';
import Scrollable from '../../../src/Scrollable';
import Shared from './Shared';
import Styles from './Desktop.css';

function Desktop() {
  return (
    <div className={Styles.root}>
      <Scrollable>
        <Shared />
      </Scrollable>
    </div>
  );
}

export default Desktop;
