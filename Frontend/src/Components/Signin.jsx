import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Signin = () => {
 
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="text"
        
        />
        <TextField
         
          id="outlined-required"
          label="email"
         
         
        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="password"
          type="password"
        />
        <TextField
          id="outlined-required"
          label="conform password"
          autoComplete="Conform Password"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-required"
          label="phone number"
          type="number"
          
        />
        <TextField
          id="outlined-required"
          label="address"
          type='text'
          />
      </div>
      <Button  variant="outlined">Sign Up</Button>
      <Typography>
      <Link to={"/"}> back to login page</Link>
      </Typography>
  

  
      </Box>
  )
}

export default Signin
