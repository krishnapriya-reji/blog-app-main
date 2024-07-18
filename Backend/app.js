const express =require('express');
const morgan = require('morgan');
require('dotenv').config();
require('./db/mongodb');
const cors=require('cors');
const userRoute = require ('./routes/userRoute');
const postRoute = require ('./routes/postRoute');
const PORT = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use('/api', postRoute);

app.listen(PORT,()=>{
    console.log(`${PORT} is up and running`);
})