import Paper from '../../src/Paper';
import React from 'react';

function PaperDocs() {
  return (
    <div>
      <h1>Paper</h1>
      <Paper elevation={2} style={{height: '100px', width: '100px', padding: '10px', background: 'white'}}>
        Paper with elevation of 2.
      </Paper>
      <br />
      <Paper elevation={12} style={{height: '100px', width: '100px', padding: '10px', background: 'white'}}>
        Paper with elevation of 12.
      </Paper>
      <br />
      <Paper elevation={25} style={{height: '100px', width: '100px', padding: '10px', background: 'white'}}>
        Paper with elevation of 25.
      </Paper>
    </div>
  );
}

export default PaperDocs;
