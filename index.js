const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs');
app.use(expressLayouts); // ini juga third-party midleware

app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.render('Main_Page/index', {phone_number : '+62 858 1564 8255',
    title: "Main Page",
    layout: "layouts/main-layout"
}) 
})

app.get('/login', (req,res)=>{
    res.render('Login_Register/login_register', {
        title: "Login",
    layout: "layouts/bs-layout"
    }) 
})

app.get('/gallery', (req,res)=>{
    res.render('Main_Page/Gallery',{
        title: "Galery Page",
    layout: "layouts/main-layout",
    phone_number : '+62 858 1564 8255'
    }) 
})


app.get('/list-event', (req,res)=>{
    res.render('List_Event_Page/index') 
})


app.get('/my-event', (req,res)=>{
    res.render('MyEvent/index') 
})

app.get('/profile-event', (req,res)=>{
    res.render('P_Event/index') 
})



app.get('/join-event', (req,res)=>{
    res.render('Join_Event/index') 
})



app.get('/buat-event', (req,res)=>{
    res.render('Buat_Event/index') 
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}, Link= http://localhost:${port}/`)
  })