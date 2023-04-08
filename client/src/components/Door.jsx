import React from 'react'
import Box from '@mui/material/Box';
import Door from './Image/door.png'
export default function DivOne() {
  return (
    <>
        <Box className="doorbg doorhandel">
             <img src={Door} alt={Door} className="imghandel"/>
        </Box>
    </>
  )
}
