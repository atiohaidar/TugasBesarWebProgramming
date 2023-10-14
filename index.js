const express = require('express')
const app = express()
const port = 3000
app.use(express.static('views'));


app.set('view engine', 'ejs');
app.get('/login', (req,res)=>{
    res.render('login_register') 
})
app.get('/', (req,res)=>{
    res.send("halo");
})

app.listen(port,()=>{
    console.log("halo semuANYA")
})