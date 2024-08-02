const express = require('express');
require('dotenv').config();
const  configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const host = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai báo route
app.use('/',webRouter);

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})
