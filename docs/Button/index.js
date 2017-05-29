import Add from 'material-design-icons/content/svg/production/ic_add_24px.svg';
import Button from '../../src/Button';
import Edit from 'material-design-icons/editor/svg/production/ic_mode_edit_24px.svg';
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
      <Button fab buttonColor={Variables.$primary} textColor="#FFF"><Add fill="#FFF" /></Button>
      <Button fab buttonColor={Variables.$accent} textColor="#FFF"><Edit fill="#FFF" /></Button>
    </div>
  );
}

export default ButtonDocs;
