import Button from '../../src/Button';
import React from 'react';
import Variables from '../../src/variables';

function ButtonDocs() {
  return (
    <div>
      <h1>Button</h1>
      <br />
      <Button>Default</Button>
      <br />
      <Button textColor={Variables.$orange700}>Custom Text Color</Button>
      <br />
      <Button buttonColor={Variables.$accent} textColor={'#FFF'}>Custom Button Color</Button>
      <br />
      <Button buttonColor={Variables.$primary} textColor={'#FFF'}>Custom Button Color</Button>
      <br />
      <Button fab buttonColor={Variables.$primary} textColor="#FFF">+</Button>
    </div>
  );
}

export default ButtonDocs;
