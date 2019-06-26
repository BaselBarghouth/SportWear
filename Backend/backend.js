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
      
      res.send({messege:err.message})
    }
    res.send({data:row})
  });
});
});
app.get('/products/shoes/men', (req,res)=>{
  db.serialize(() => {
    db.all(`SELECT * FROM Products WHERE Type='M' AND Category='S'`, (err, row) => {
      if (err) {
        res.send({messege:err.message})
      }
      res.send({data:row})
    });
  });
  });
  app.get("/products/delete/:id",(req, res) => {
    let id = parseInt(req.params.id);
      db.all(`DELETE FROM Products WHERE ID= ?`,[id] ,(err, row) => {
        if (err) {
          res.send({messege:err.message})
        }
        res.send({data:row})
      });
    });

app.get('/Products/create', (req, res) =>{
  var dataCategory = req.query.Category;
  var dataType = req.query.Type;
  var dataPicture = req.query.Picture;
  var dataTitle = req.query.Title;
  var dataDescription = req.query.Description;
  var dataPrice = req.query.Price;
  var dataSize = req.query.Size;

  db.serialize(() => {
    db.all(`INSERT INTO Products 
    (Category, Type, Picture, Title, Description, Price, Size)
    VALUES (? , ?, ?, ?, ?, ?, ?)
    `,[dataCategory, dataType, dataPicture, dataTitle, dataDescription, dataPrice, dataSize ], (err, row) => {
      if (err) {
        res.send({message:err.message})
      }})})}); 
    
// Below is the code for the API that Updates the database attributes by requesting the ID and querying the data

app.get('/products/edit/:ID', (req,res)=>{
  const Category = req.query.Category;
  const Type = req.query.Type;
  const Picture = req.query.Picture;
  const Title = req.query.Title;
  const Description = req.query.Description;
  const Price = req.query.Price;
  const Size = req.query.Size;

  const ID = parseInt(req.params.ID);
 
  db.serialize(() => {
    db.run(
      'UPDATE Products SET Category = ?, Type = ?, Picture = ?, Title = ?, Description = ?, Price = ?, Size = ? WHERE ID= ?',[Category,Type,Picture,Title, Description, Price, Size, ID], function(err) {
      if (err) {
        res.send({messege:err.message})
      }
      res.send({data:this.changes})
    });
  });
  });


app.get('/products/clothes/men', (req,res)=>{
  db.serialize(() => {
    db.all(`SELECT * FROM Products WHERE Type='M' AND Category='C'`, (err, row) => {
      if (err) {
        res.send({messege:"err.message"})
      }
      res.send({data:row})
    });
  });
  });


  app.get('/products/shoes/women', (req,res)=>{
    db.serialize(() => {
      db.all(`SELECT * FROM Products WHERE Type='F' AND Category='S'`, (err, row) => {
        if (err) {
          res.send({messege:"err.message"})
        }
        res.send({data:row})
      });
    });
    });

    app.get('/products/clothes/women', (req,res)=>{
      db.serialize(() => {
        db.all(`SELECT * FROM Products WHERE Type='F' AND Category='C'`, (err, row) => {
          if (err) {
            res.send({messege:"err.message"})
          }
          res.send({data:row})
        });
      });
      });

  app.get('/products/shoes/kids', (req, res) =>{
    db.serialize(() => {
      db.all("SELECT  * FROM Products WHERE Type='K' AND Category='S'", (err, row) =>{
        if(err) {
          res.send({messege:"err.message"})
        }
        res.send({data:row})
      });
    });
  });


  app.get('/products/clothes/kids', (req, res) =>{
    db.serialize(() => {
      db.all("SELECT  * FROM Products WHERE Type='K' AND Category='C'", (err, row) =>{
        if(err) {
          res.send({messege:"err.message"})
        }
        res.send({data:row})
      });
    });
  });
  app.get('/products/equipment', (req, res) =>{
    db.serialize(() => {
      db.all("SELECT  * FROM Products WHERE Category='E'", (err, row) =>{
        if(err) {
          res.send({messege:"err.message"})
        }
        res.send({data:row})
      });
    });
  });
  app.get('/products/delete', (req, res) =>{
    db.serialize(() => {
      db.all("SELECT  * FROM Products WHERE Category='E'", (err, row) =>{
        if(err) {
          res.send({messege:"err.message"})
        }
        res.send({data:row})
      });
    });
  });
    


