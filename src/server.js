const express = require('express');
const { hostname } = require('os');
const path = require('path')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8888;
const host = process.env.HOST_NAME;


// console.log(">>> check env ", process.env);

//config template engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')))


//Khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/abc', (req, res) => {
    res.send('Check ABC')
})

app.get('/khoa', (req, res) => {
    // res.send('<h1>Khoa KOKAIN</h1>');
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
