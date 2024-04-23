const connection = require('./connection');

const express  = require('express');
const bodyParser = require('body-parser');

var app = express();
// middleware
app.use(bodyParser.json());


// creating a rout 
// GET ALL THE EMPLOYEE DETAILS 
app.get('/employees', function(req, res){
  connection.query('SELECT * FROM employee', function(err,rows){

   if(err){
    console.log(err);
   }else{
    // console.log(rows);
    res.send(rows);
   }

})

});

// get employee by id 
app.get('/employees/:id', function(req, res){
    connection.query('SELECT * FROM employee WHERE id =?',[req.params.id] , function(err,rows){
  
     if(err){
      console.log(err);
     }else{
      // console.log(rows);
      res.send(rows);
     }
  
  })
  
  });

  // delete user by id
  app.delete('/employees/:id', function(req, res){
    connection.query('DELETE * FROM employee WHERE id =?',[req.params.id] , function(err,rows){
  
     if(err){
      console.log(err);
     }else{
      // console.log(rows);
      res.send(rows);
     }
  
  })
  
  });

  // INSERT employee
  app.post('/employees', function(req, res){

    // to recive the value from user 
   var emp =  req.body
   var empData = [emp.name , emp.salary];
    connection.query('INSERT INTO employee(name,salary) values(?)',[empData],function(err,rows){
  
     if(err){
      console.log(err);
     }else{
      // console.log(rows);
      res.send(rows);
     }
  
  })
  
  });

  app.patch('/employees', function(req, res){

    // to recive the value from user 
   var emp =  req.body
    connection.query('UPDATE employee SET ? WHERE id = '+emp.id,[emp],function(err,rows){
  
     if(err){
      console.log(err);
     }else{
      // console.log(rows);
      res.send(rows);
     }
  
  })
  
  });


  app.put('/employees', function(req, res){
   var emp = req.body;
    // to recive the value from user 
   var emp =  req.body
    connection.query('UPDATE employee SET ? WHERE id = '+emp.id,[emp],function(err,rows){
  
     if(err){
      console.log(err);
     }else{
      if(rows.affectedRows==0){
         var empData = [emp.name,emp.salary]
         connection.query('INSERT INTO employee(name,salary) values (?)',[empData] , (err,row)=>{
            if(err){
                console.log(err);
            }else{
                res.send(row);
            }
            })
        }else{
            res.send(rows);
        }
     
     }
  
  })
  
  });



// port to run this application
app.listen(4500, ()=>{
    console.log("express server is running on port 4500");
});