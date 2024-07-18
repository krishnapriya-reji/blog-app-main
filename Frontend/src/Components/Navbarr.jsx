import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
     
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blogs
        </Typography>
        <Link to={"/Blog"}><Button color="inherit" style={{color:'white'}}>Blog</Button></Link>
        <Link to={"/Addblog"}><Button color="inherit"  style={{color:'white'}}>Addblog</Button></Link>
        <Button color="inherit"  style={{color:'white'}}>Logout</Button>

      </Toolbar>
    </AppBar>
  </Box>
  )
}



export default Navbarr
