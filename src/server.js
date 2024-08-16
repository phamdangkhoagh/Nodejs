const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');


const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const host = process.env.HOST_NAME;

//config request body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


//config template engine
configViewEngine(app);

//Khai báo route
app.use('/',webRouter);
app.use('/v1/api',apiRouter);

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

