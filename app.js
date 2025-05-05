
const express = require("express")
require('dotenv').config();
const colors = require("colors")
const cors = require("cors")
const mongoose = require("mongoose")
const morgan = require("morgan")



const indexfile = require('./router/index.js')

// DOTENV CONFIGURATION
dotenv.config();

// DATABASE CONFIGURATION
// connectDB();

// REST OBJ
const app = express();

//******** MIDDLEWARE *******/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/',indexfile)


const dbURI = `mongodb+srv://name:password@cluster0.0tq4xsw.mongodb.net/po?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI)
  .then(() => 
    {
      app.listen(2031);
      console.log('MongoDB connected...')})
  .catch(err => console.log(err));  
