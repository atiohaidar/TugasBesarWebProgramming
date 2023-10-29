const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static('views/Login_Register'));




app.get('/login', (req,res)=>{

    res.render('Login_Register/login_register') 
})
app.use(express.static('views/Main_Page'));

app.get('/', (req,res)=>{
    res.render('Main_Page/index', {phone_number : '+62 858 1564 8255'}) 
})
app.get('/gallery', (req,res)=>{
    res.render('Main_Page/Gallery') 
})
app.use(express.static('views/List_Event_Page'));

app.get('/list-event', (req,res)=>{
    res.render('List_Event_Page/index') 
})
app.use(express.static('views/MyEvent'));

app.get('/my-event', (req,res)=>{
    res.render('MyEvent/index') 
})
app.use(express.static('views/P_Event'));

app.get('/profile-event', (req,res)=>{
    res.render('P_Event/index') 
})

app.use(express.static('views/Join_Event'));

app.get('/join-event', (req,res)=>{
    res.render('Join_Event/index') 
})

app.use(express.static('views/Buat_Event'));

app.get('/buat-event', (req,res)=>{
    res.render('Buat_Event/index') 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}, Link= http://localhost:${port}/`)
  })