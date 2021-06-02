import { Button } from '@material-ui/core'
import React from 'react'
import { useCanvas } from './CanvasContext'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

//   return <button onClick={clearCanvas}>Clear the canvas</button>
return <Button variant="contained" color="secondary" onClick={clearCanvas} style={{marginLeft:'auto'}}>Clear the canvas</Button>
}