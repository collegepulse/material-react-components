import BottomNavigation, {BottomNavigationItem} from '../../src/BottomNavigation';
import React from 'react';

function BottomNavigationDocs() {
  return (
    <div>
      <h1>BottomNavigation</h1>
      <br />
      <BottomNavigation style={{maxWidth: '270px'}}>
        <BottomNavigationItem>Foo</BottomNavigationItem>
        <BottomNavigationItem>Bar</BottomNavigationItem>
        <BottomNavigationItem>Baz</BottomNavigationItem>
      </BottomNavigation>
    </div>
  );
}

export default BottomNavigationDocs;
