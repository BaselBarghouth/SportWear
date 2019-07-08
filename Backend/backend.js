const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors());
app.use(express.static('./Public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT =  3001; 

 app.listen(PORT, ()=>{
     console.log(`server listen on port ${PORT}`)
 } )
// app.post('/form',(req,res)=>{
//     console.log(req.body)
// })
app.post('/form',(req,res)=>{
 console.log(req.body)
const transport = {
    service :"Gmail",
    auth:{
        user: "sportswear96@gmail.com",
        pass :"sportswear123"
    }
}
 const transporter = nodemailer.createTransport(transport);
 const option = {
     from : `${req.body.name} : <${req.body.email}>`,
     to :"baselbarghout0@gmail.com",
     subject :"Hello Mr. Omar",
     html : `<h3>Message Contact</h3>
                <ul>
                    <li>Name :${req.body.name}</li>
                    <li>Last Name :${req.body.lastname}</li>
                    <li>Email :${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
     `
 }
 transporter.sendMail(option , (err,info)=>{
     err ? console.log(err) : console.log("Email has sent....")
 })
})

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
      res.send(row)
    });
  });
  });
  

  app.post('/products/delete',(req,res)=>{
   console.log(req.body.ID)
    db.all(`DELETE FROM Products WHERE ID= ?`,[req.body.ID] ,(err, row) => {
      if (err) {
        res.send({messege:err.message})
      }
      res.send(row)
    });
  })
  
  app.post('/adminmenu/additem',(req,res)=>{
    console.log(req.body.d)
    db.serialize(() => {
      db.all(`INSERT INTO Products 
      (Category, Type, Picture, Title, Description, Price, Size)
      VALUES (? , ?, ?, ?, ?, ?, ?)
      `,[req.body.category,req.body.type,req.body.picture,req.body.title,req.body.d,req.body.price,req.body.size], (err, row) => {
        if (err) {
          res.send({message:err.message})
        }})})
  })
  // app.get('/Products/create', (req, res) =>{
  //   var dataCategory = req.query.Category;
  //   var dataType = req.query.Type;
  //   var dataPicture = req.query.Picture;
  //   var dataTitle = req.query.Title;
  //   var dataDescription = req.query.Description;
  //   var dataPrice = req.query.Price;
  //   var dataSize = req.query.Size;
  
  //   db.serialize(() => {
  //     db.all(`INSERT INTO Products 
  //     (Category, Type, Picture, Title, Description, Price, Size)
  //     VALUES (? , ?, ?, ?, ?, ?, ?)
  //     `,[dataCategory, dataType, dataPicture, dataTitle, dataDescription, dataPrice, dataSize ], (err, row) => {
  //       if (err) {
  //         res.send({message:err.message})
  //       }})})}); 
      
  // Below is the code for the API that Updates the database attributes by requesting the ID and querying the data
  
  // app.get('/products/edit/:ID', (req,res)=>{
  //   const Category = req.query.Category;
  //   const Type = req.query.Type;
  //   const Picture = req.query.Picture;
  //   const Title = req.query.Title;
  //   const Description = req.query.Description;
  //   const Price = req.query.Price;
  //   const Size = req.query.Size;
  
  //   const ID = parseInt(req.params.ID);
  app.post('/products/edit/',(req,res)=>{
    console.log(req.body)
   
      db.run(
        'UPDATE Products SET Category = ?, Type = ?, Picture = ?, Title = ?, Description = ?, Price = ?, Size = ? WHERE ID= ?',[req.body.category,req.body.type,req.body.picture,req.body.title, req.body.d, req.body.price, req.body.size, req.body.id], function(err) {
        if (err) {
          res.send({messege:err.message})
        }
        res.send(this.changes)
       });
  }) 
  
   
  
  
  app.get('/products/clothes/men', (req,res)=>{
    db.serialize(() => {
      db.all(`SELECT * FROM Products WHERE Type='M' AND Category='C'`, (err, row) => {
        if (err) {
          res.send({messege:err.message})
        }
        res.send(row)
      });
    });
    });
  
  
    app.get('/products/shoes/women', (req,res)=>{
      db.serialize(() => {
        db.all(`SELECT * FROM Products WHERE Type='F' AND Category='S'`, (err, row) => {
          if (err) {
            res.send({messege:"err.message"})
          }
          res.send(row)
        });
      });
      });
  
      app.get('/products/clothes/women', (req,res)=>{
        db.serialize(() => {
          db.all(`SELECT * FROM Products WHERE Type='F' AND Category='C'`, (err, row) => {
            if (err) {
              res.send({messege:"err.message"})
            }
            res.send(row)
          });
        });
        });
  
    app.get('/products/shoes/kids', (req, res) =>{
      db.serialize(() => {
        db.all("SELECT  * FROM Products WHERE Type='K' AND Category='S'", (err, row) =>{
          if(err) {
            res.send({messege:"err.message"})
          }
          res.send(row)
        });
      });
    });
  
  
    app.get('/products/clothes/kids', (req, res) =>{
      db.serialize(() => {
        db.all("SELECT  * FROM Products WHERE Type='K' AND Category='C'", (err, row) =>{
          if(err) {
            res.send({messege:"err.message"})
          }
          res.send(row)
        });
      });
    });
    app.get('/products/equipment', (req, res) =>{
      db.serialize(() => {
        db.all("SELECT  * FROM Products WHERE Category='E'", (err, row) =>{
          if(err) {
            res.send({messege:"err.message"})
          }
          res.send(row)
        });
      });
    });
   
    // Below are the APIs for querying the pictures of the least priced product

app.get('/products/clothes/picture', (req,res)=>{
  db.serialize(() => {
   const x =  db.all(`SELECT Picture , MIN(Price) AS Price FROM PRODUCTS WHERE Category='C'`, (err, x) => {
      console.log(x);
      if (err) {
        res.send({messege:err.message})
      }
      res.send(x)
    });
  });
  });

  app.get('/products/shoes/picture', (req,res)=>{
    db.serialize(() => {
     const x =  db.all(`SELECT Picture , MIN(Price) AS Price FROM PRODUCTS WHERE Category='S'`, (err, x) => {
        console.log(x);
        if (err) {
          res.send({messege:err.message})
        }
        res.send(x)
      });
    });
    });

    app.get('/products/equipment/picture', (req,res)=>{
      db.serialize(() => {
       const x =  db.all(`SELECT Picture , MIN(Price) AS Price FROM PRODUCTS WHERE Category='E'`, (err, x) => {
          console.log(x);
          if (err) {
            res.send({messege:err.message})
          }
          res.send(x)
        });
      });
      });
