// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

//-----------------------------------------------------
const express = require('express');

const app = express();

// app.get('/', (req,res) => {
//     res.sendFile('./static/index.html',{
//         root: __dirname
//     });
// })

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.get('/weather', (req,res) => {
    res.send('the current weather is nice')
})

// app.use sirve para recibir la ruta en caso de que no exista
app.use((req,res) => {
    res.send('No se encontro tu pagina')
    // ERROR 404 no encontro nada el servidor
})

// https://www.youtube.com/watch?v=JmJ1WUoUIK4
// 29:38 / 4:00:29

app.listen(3000)
console.log(`Server on port ${3000}`)