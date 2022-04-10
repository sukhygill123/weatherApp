const express =require('express');
const app = express();
const port = process.env.PORT || 3000;
const path =require('path')
const hbs = require('hbs')

const templatesPath=path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')
const staticPath = path.join(__dirname,"../public")

app.set("view engine", 'hbs');
app.set("views", templatesPath);

app.use(express.static(staticPath));
hbs.registerPartials(partialPath);

app.get("", (req,res)=>{
    res.render('home')
})

app.get("/about", (req,res)=>{
    res.render('about')
})

app.get("/weather", (req,res)=>{
    res.render('weather')
})

app.get("*", (req,res)=>{
    res.render('404')
})






app.listen(port, ()=>{
    console.log('listening port 3000');
})