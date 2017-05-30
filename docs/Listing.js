import AppBar from './AppBar';
import BottomNavigation from './BottomNavigation';
import Button from './Button';
import Collapse from './Collapse';
import Dialog from './Dialog';
import List from './List';
import Paper from './Paper';
import React from 'react';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';
import Typography from './Typography';

function Listing() {
  return (
    <div style={{padding: '10px'}}>
      <AppBar />
      <BottomNavigation />
      <Collapse />
      <Button />
      <Dialog />
      <List />
      <Paper />
      <Switch />
      <Tabs />
      <TextField />
      <Typography />
    </div>
  );
}

export default Listing;
