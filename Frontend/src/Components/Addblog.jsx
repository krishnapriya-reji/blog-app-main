import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
      <div>
        <TextField
          required
          id="outlined-required"
          label="Blog Name"
          type="text"
        
        />
         </div>
         <div>
        <TextField
         
          id="outlined-required"
          label="Blog description"
          multiline 
         rows={6}
         
         
        />
        </div>
        <div>
        <TextField
         
          id="outlined-required"
          label="image url"
         
         
         
        />
        </div>
        
       
        <Button  variant="outlined">Add blog</Button>
  
      </Box>
    </div>
  )
}

export default Addblog
