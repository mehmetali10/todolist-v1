
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const items = ["Wake up", "have breakfast", "Go to work !"];
const workItems = ["add new feature", "refactor code", "make test"];


app.get("/", (req,res)=>{
    let day = date.getDay();
    res.render("list", {listTitle : day, collection: items});
});


app.post("/" , (req, res) => {

    let item = req.body.td;
    console.log(req.body.list);

    if(req.body.list =="Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");
    }   
});


app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List", collection: workItems});
});


app.listen(3000, ()=>{
    console.log("server has started on port 3000.")
});

