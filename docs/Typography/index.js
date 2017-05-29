import React from 'react';
import Typography from '../../src/Typography';

function PaperDocs() {
  return (
    <div>
      <h1>Typography</h1>
      <Typography type="display4">display4</Typography>
      <Typography type="display3">display3</Typography>
      <Typography type="display2">display2</Typography>
      <Typography type="display1">display1</Typography>
      <Typography type="headline">headline</Typography>
      <Typography type="title">title</Typography>
      <Typography type="subheading">subheading</Typography>
      <Typography type="body2">body2</Typography>
      <Typography type="body1">body1</Typography>
      <Typography type="caption">caption</Typography>
      <Typography type="button">button</Typography>
    </div>
  );
}

export default PaperDocs;
