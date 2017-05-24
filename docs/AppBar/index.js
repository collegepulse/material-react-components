import AppBar from '../../src/AppBar';
import React from 'react';

function PaperDocs() {
  return (
    <div>
      <h1>AppBar</h1>
      <AppBar elevation={2} style={{width: '175px', lineHeight: '64px', fontSize: '18px', color: 'white'}}>
        AppBar
      </AppBar>
    </div>
  );
}

export default PaperDocs;
