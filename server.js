const express = require("express");
const app = express();
const {pool} = require('./db.js');

app.use(express.static("public"));
app.use(exrpess.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res, next) =>{
    res.render("index");
});

const newUser = (email, password) =>{
    pool.query('INSERT INTO users (id, email, password) VALUES ($1, $2, $3) RETURNING email', [3, email, password], (err, results)=>{
        if(err){
            console.log(err);
        }else{
            console.log("query success");
            console.log(results.rows);
        }
    })
}

app.post("/", (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;
    newUser(email, password);
});