import AppBar from './AppBar';
import BottomNavigation from './BottomNavigation';
import Dialog from './Dialog';
import FlatButton from './FlatButton';
import Paper from './Paper';
import React from 'react';
import Switch from './Switch';
import TextField from './TextField';

function Listing() {
  return (
    <div style={{padding: '10px'}}>
      <AppBar />
      <BottomNavigation />
      <Dialog />
      <FlatButton />
      <Paper />
      <Switch />
      <TextField />
    </div>
  );
}

export default Listing;
