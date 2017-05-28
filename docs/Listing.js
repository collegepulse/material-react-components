import AppBar from './AppBar';
import BottomNavigation from './BottomNavigation';
import Button from './Button';
import Dialog from './Dialog';
import Paper from './Paper';
import React from 'react';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';

function Listing() {
  return (
    <div style={{padding: '10px'}}>
      <AppBar />
      <BottomNavigation />
      <Button />
      <Dialog />
      <Paper />
      <Switch />
      <Tabs />
      <TextField />
    </div>
  );
}

export default Listing;
