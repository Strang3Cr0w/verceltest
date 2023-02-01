const express = require("express");
const app = express();
const {client} = require('./db.js');

app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res, next) =>{
    res.render("index");
});

app.get("/about", (req, res, next) =>{
    res.sendFile(__dirname + "public" + "about.html");
});

app.get("/contactUs", (req, res, next) =>{
    res.sendFile(__dirname + "public" + "contactUs.html");
});

const newUser = (email, password) =>{
    client.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING email', [email, password], (err, results)=>{
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
    console.log(email + " " + password);
    newUser(email, password);
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
});