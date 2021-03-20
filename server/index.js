const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "stringbeans12",
  database: "db_aBanks",
});

app.post('/register', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
    "INSERT INTO usercredentials (UserID, UserPassword) VALUES (?,?)", 
    [username, password], 
    (err, result) =>{
        console.log(err);
    }
    );
})

app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
    "SELECT * FROM usercredentials WHERE UserID = ? AND UserPassword = ?", 
    [username, password], 
    (err, result) =>{
        if(err){
            res.send({err: err});
        }
        if(result.length > 0){
            res.send(result)
        }
        else{
            res.send( { message: "Wrong username / password" })
        }
        }
    );
})

app.listen(3001, () => {
    console.log("running server");
});