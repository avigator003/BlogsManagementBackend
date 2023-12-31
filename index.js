/* =======================
    LOAD THE DEPENDENCIES
==========================*/
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const https = require('https')
var cors = require('cors');
const fs = require('fs')
/* =======================
LOAD THE CONFIG
==========================*/
const config = require('./config')
const path = require('path')
const port = process.env.PORT || 5002
process.env.TZ = 'Asia/Kolkata'; 
/* =======================
EXPRESS CONFIGURATION
==========================*/
const app = express()
// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));

const corsOptions = {
    origin: true,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  
app.use(cors(corsOptions));

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for jwt
app.set('jwt-secret', config.secret)

// index page, just for testing
app.get('/', (req, res) => {
    res.send('Hello JWT')
})

// configure api router
app.use('/api', require('./routes/api'))
app.use('/uploads', express.static('public/uploads'));


// open the server
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})



/* =======================
    CONNECT TO MONGODB SERVER
==========================*/
mongoose.connect(config.mongodbUri,
    {useNewUrlParser: true, 
     useUnifiedTopology: true ,
     useCreateIndex:true,
     timezone: 'Asia/Kolkata' })
     
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})