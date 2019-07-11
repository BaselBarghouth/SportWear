const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();
const storge = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'Public/')
  },
  filename:function(req,file,cb){
    cb(null,Date.now()+'-'+file.originalname)
  }
});
const upload = multer({storage:storge})
app.use(cors());
app.use(express.static('./Public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT =  3001; 

 app.listen(PORT, ()=>{
     console.log(`server listen on port ${PORT}`)
 } )

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
     to :"omar@codi.tech",
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
console.log("Email has sent....")
 })})
  
   
  
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
  
  app.post('/adminmenu/additem',upload.single('image'),(req,res)=>{
    console.log(req.file, req.body.price)
    console.log("hello")
    db.serialize(() => {
      db.all(`INSERT INTO Products 
      (Category, Type, Picture, Title, Description, Price, Size)
      VALUES (? , ?, ?, ?, ?, ?, ?)
      `,[req.body.category,req.body.type,req.file.filename,req.body.title,req.body.d,req.body.price,req.body.size], (err, row) => {
        if (err) {
          res.send({message:err.message})
        }
      else{
        console.log(req.body)
      }})})
  })
  
  app.post('/products/edit/',upload.single('image'),(req,res)=>{
    console.log(req.body)
    let pic
    if(req.file)
    pic = req.file.filename 
    else pic=req.body.picture;
   console.log(pic)
  
      db.run(
        'UPDATE Products SET Category = ?, Type = ?, Picture = ?, Title = ?, Description = ?, Price = ?, Size = ? WHERE ID= ?',[req.body.category,req.body.type,pic,req.body.title, req.body.d, req.body.price, req.body.size, req.body.id], function(err) {
        if (err) {
          res.json({messege:err.message})
        }
        res.json(this.changes)
       });
  });

  
  
  app.get('/products/clothes/men', (req,res)=>{
    db.serialize(() => {
      db.all(`SELECT * FROM Products WHERE Type='M' AND Category='C'`, (err, row) => {
        if (err) {
          res.json({messege:err.message})
        }
        res.json(row)
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
// app.post('/login',checkJwt,(req,res)=>{
//   const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://dev-d4wbmrpi.eu.auth0.com/.well-known/jwks.json`
//   }),
//   audience: 'sIW6F1GsmKhYxrnr9ZIOKmZ9s1Q9ywmV',
//   issuer: `https://dev-d4wbmrpi.eu.auth0.com/`,
//   algorithms: ['RS256']
//   })
// })