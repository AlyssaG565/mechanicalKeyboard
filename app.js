//const MongoClient= require('mongodb');
//const assert = require('assert');
const express=require('express');
//const Cors = require("cors");
const app=express();
var path = require('path')
//const BodyParser = require("body-parser");
const expressHandlebars = require('express-handlebars');
const expressSession = require('express-session');



app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views'));
//allows the images to be used in the views->images folder
app.use(express.static('views/images'));

app.get('/',(request, response)=>{
    response.render("FrontPage.handlebars");
});
app.get('/Home', (request,response, next)=>{
        response.render("FrontPage.handlebars"); 
});
app.get('/Products',(request, response, next)=>{
        response.render("Products.handlebars");
});
app.get('/Checkout',(request,response, next)=>{
        response.render("Checkout.handlebars");
});
app.get('/Updates',(request,response, next)=>{
        response.render("Updates.handlebars");
});

app.get('/FAQs',(request,response, next)=>{
        response.render("FAQs.handlebars");
});




const port = 8085;

app.listen(port,()=>{
       
});
