const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;
app.listen(port, ()=>`server is running on ${port}`)

 
// open the database
let db = new sqlite3.Database('./SportWear.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Sport-Wear database.');
});
 
app.get('/products/shoes/men', (req,res)=>{
db.serialize(() => {
  db.all(`SELECT * FROM Products WHERE Type='M' AND Category='S'`, (err, row) => {
    if (err) {
      res.send({messege:"err.message"})
    }
    res.send({data:row})
  });
});
});

 
