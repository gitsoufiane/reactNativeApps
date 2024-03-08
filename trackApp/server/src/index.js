const express = require('express')
const mysql = require('mysql')
const routes = require('./routes/auth')

const app = express()
app.use(routes)

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trackapp'
})

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ');
    console.error({err})
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.get('/',(req,res)=>{
  res.send('hi there')
})

app.listen(3000,()=>{
  console.log('listen to port 3000')
})