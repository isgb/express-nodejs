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

router.get('/', (req,res) => {
    // res.send('Dashboard page')

    // Tambien exite handlebar como motor de plantillas
    let isActive = true;

    const title  = 'Index page';
    res.render('index',{
        title : title,
        isActive : isActive
    })
})

router.get('/about', (req,res) => {
    res.render('about')
})

// router.all('/about', (req,res) => {
//     // res.send('about page')

//     const title  = 'Acerca de';

//     res.render('index',{title : title})
// })

router.get('/dashboard', (req,res) => {
    // res.send('Dashboard page')
    res.render('dashboard')
})


router.get('/posts', (req,res) => {
    res.render('posts')
})


module.exports = router