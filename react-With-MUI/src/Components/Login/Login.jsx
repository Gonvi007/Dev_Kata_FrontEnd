// import { useState } from 'react'
import './stylesLogin.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Login = () => {
  // const [count, setCount] = useState(0)

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <Stack sácomg={8} direction="column">
      <TextField label="Standard" variant="standard" />
      <TextField label="Password" variant="standard" type="password"/>
      <Button variant="contained">Contained</Button>
    </Stack>

  </Box>
  )
}

export {Login};
