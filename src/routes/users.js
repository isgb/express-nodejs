
// function UserRoutes(app) {
    // app.get('/Username', (req,res) => {
    //     res.send('Username page')
    // })
    
    
    // app.get('/profile', (req,res) => {
    //     res.send('profile page')
    // })
    
// }

// module.exports = UserRoutes;

// const express = require('express')
const {Router} = require('express')

// const router = express.Router();
const router = Router();

router.get('/Username', (req,res) => {
    res.send('Username page')
})

router.get('/profile', (req,res) => {
    res.send('profile page')
})

router.get('/users', (req,res) => {
   res.render('users')
})


module.exports = router