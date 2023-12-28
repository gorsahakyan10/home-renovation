import express from "express";
import mysql from "mysql2";
import path from 'path';

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "lkji1122",
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MSQL works...");
});

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.dirname('public') + '/public'))

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   next();
})

app.get('/masters', (req, res) => {
   connection.query('USE masters')
   connection.query('SELECT * FROM masters', (err, masters) => {
      if(err){
        console.log(err);
        throw err
      }
      res.json(masters)
   })
})

app.get('/stores', (req, res) => {
   connection.query('USE masters')
   connection.query('SELECT * FROM stores', (err, stores) => {
      if(err){
        console.log(err);
        throw err
      }
      res.json(stores)
   })
})

app.listen(PORT, () => {
   console.log('server works...')
})
