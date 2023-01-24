const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(exrpess.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res, next) =>{
    res.render("index");
});