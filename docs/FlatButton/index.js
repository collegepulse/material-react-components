import FlatButton from '../../src/FlatButton';
import React from 'react';

function FlatButtonDocs() {
  return (
    <div>
      <h1>FlatButton</h1>
      <br />
      <FlatButton>Flat Button</FlatButton>
      <br />
      <FlatButton>Flat Button With Even Longer Text</FlatButton>
      <br />
      <FlatButton>
        <div>
          <div>Complex Example</div>
          <br />
          <img src={'http://lorempixel.com/400/200/'} alt={'Something Random'} />
        </div>
      </FlatButton>
    </div>
  );
}

export default FlatButtonDocs;
