const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    // inside createConnection function we have to write user name database name and connection name 
    host: 'localhost',
    user: 'root',
    password: 'Mmhapu@800',
    database: 'employeedb',
    // multipleStatements: true
})

 mysqlConnection.connect((error)=>{
 if(!error){
        console.log("Connected");
    }
    else{
        console.log("Connection Failed"+JSON.stringify(error ,undefined,2));
    }
})

module.exports = mysqlConnection;