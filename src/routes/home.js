// function HomeRoutes(app){
    // app.all('/about', (req,res) => {
    //     res.send('about page')
    // })
    
    // app.get('/dashboard', (req,res) => {
    //     res.send('Dashboard page')
    // })
    
// }

// module.exports = HomeRoutes

// const express = require('express')
const {Router} = require('express')

// const router = express.Router();
const router = Router();

router.all('/about', (req,res) => {
    // res.send('about page')

    const title  = 'Mi primera pagina en express 2';

    res.render('index',{title : title})
})

router.get('/dashboard', (req,res) => {
    // res.send('Dashboard page')
    res.render('Dashboard')
})

module.exports = router