const express = require('express');
require('dotenv').config();
const  configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8888;
const host = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai báo route
app.use('/',webRouter);

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Hi Khoa' });
cat.save();

//test connection
(async() => {
  //test connection 
  try {
    await connection().then;
    app.listen(port, host, () => {
      console.log(`Backend zero listening on port ${port}`)
    })
  } catch(error){
    console.log("Error connect to DB: ",error);
  }

})()

