
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var items = ["Wake up", "have breakfast", "Go to work !"];

app.get("/", (req,res)=>{
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday : "long",
        day : "numeric",
        month : "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay : day, collection: items});
});

app.post("/" , (req, res) => {
    var item = req.body.td;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, ()=>{
    console.log("server has started on port 3000.")
});


/*

<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

*/