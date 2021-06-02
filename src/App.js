import { AppBar,  Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';

function App() {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6">
          Canvas React App
        </Typography>
        <ClearCanvasButton/>
        
      </Toolbar>
    </AppBar>
    
      <Canvas/>
      
    </>
  );
}

export default App;