import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Blog = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/api/blogs').then((res)=>{
      console.log(res.data);
      setData(...data, res.data);
    })
  },[])
  return (
    
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
{data.map((item)=>(
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }} style={{margin:'20px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.post}
        </Typography>
      </CardContent>
     
    </Card>
      </Grid>
))}
    </Grid>
  )
}

export default Blog
