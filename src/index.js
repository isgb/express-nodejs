// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

//-----------------------------------------------------
// const express = require('express');

// const app = express();

// app.get('/', (req,res) => {
//     res.sendFile('./static/index.html',{
//         root: __dirname
//     });
// // })

// app.get('/', (req,res) => {
//     res.send('Hello world')
// })

// app.get('/about', (req,res) => {
//     res.send('about')
// })

// app.get('/weather', (req,res) => {
//     res.send('the current weather is nice')
// })

// // app.use sirve para recibir la ruta en caso de que no exista
// app.use((req,res) => {
//     res.status(404).send('No se encontro tu pagina')
//     // ERROR 404 no encontro nada el servidor
// })

// https://www.youtube.com/watch?v=JmJ1WUoUIK4
// 29:38 / 4:00:29
// -----------------------------------------------

// const express = require('express');

// const app = express();


// app.get('/products', (req,res) => {
//     res.send('Lista de productos')
//     // REST Representation state transfer
//     // clientes rest: es un programa que nos ayuda a trabajr con peticiones
// })

// app.post('/products', (req,res) => {
//     res.send('creando productos')
// })

// app.put('/products', (req,res) => {
//     res.send('actualizando productos')
// })

// app.delete('/products', (req,res) => {
//     res.send('eliminando producto')
// })

// app.patch('/products', (req,res) => {
//     res.send('actualizando una parte del producto')
// })

// // -------------------------------------------------

// const express = require('express');

// const app = express();

// // Para entender el tipo de dato que viene del body del cliente
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

// app.get('/', (req,res) => {
//     res.send('Lista de productos')
// })

// app.get('/miarchivo', (req,res) => {
//     res.sendFile('./javascript.png',{
//         root: __dirname
//     })
// })

// app.get('/user', (req,res) => {
//     res.json({
//         "name" : "fazt",
//         "lastname" : "ray",
//         "age": 20,
//         poinst : [1,2,3],
//         address : {
//             city: "new york",
//             stret: "some street 123"
//         }
//         // 304 guarda en memoria el navegador la peticion

//     })
// })

// app.post('/user', (req,res) => {
//     console.log(req.body)
//     res.send("usuario creado")
// })

// app.listen(3000)
// console.log(`Server on port ${3000}`)

// // -------------------------------------------------

// const express = require('express');

// const app = express();

// app.get('/search',(req,res) => {
//     if(req.query.q === 'javascript books'){
//         res.send('lista de libros de javascript')
//     }else{
//         res.send('página normal')
//     }
// })

// app.get('/hello/:username', (req,res) => {
//     // query ?user=1&age=45
//     console.log(req.params.username)
//     // console.log(req.query)
//     console.log(req.query.user)
//     console.log(req.query.age)
//     res.send(`Hello ${req.params.username}`)
// })

// app.get('/add/:x/:y', (req,res) => {
//     // console.log(req.params.x)
//     // console.log(req.params.y)
//     // res.send(`Result ${Number(req.params.x) + Number(req.params.y)}`)
//     const { x, y} = req.params;
    
//     res.send(`Result ${Number(x) + Number(y)}`)
    
// })

// app.get('/users/:username/photo', (req,res) => {
//     if(req.params.username === 'fazt'){
//         return res.sendFile('./javascript.png',{
//             root: __dirname
//         })
//     }
    
//     res.send('EL USUARIO NO TIENE ACCESO')
// })

// app.listen(3000)
// console.log(`Server on port ${3000}`)

// -------------------------------------------------

const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('ejs')

const app = express();

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')

// settings
app.set('appName','Express course')
app.set('port',3000)
app.set('case sensitive routing',true)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json())
app.use(morgan('dev'))

// HomeRoutes(app)
// UserRoutes(app)

app.use(HomeRoutes)
app.use(UserRoutes)

app.get('/note.txt', (req,res) => {
    res.send('este no es un archivo')
})

// Middlewares
app.use((req,res,next) => {

    console.log("paso por aquí")
    console.log(`Route: ${req.url} Metodo: ${req.method}`)

    next();
})

// app.use((req,res,next) => {

//     if(req.query.login === "fazt@faztweb.com"){
//         next();
//     }
//     else{
//         res.send('No autorizado')
//     }
// })

// app.get('/dashboard', (req,res) => {
//     res.send('Dashboard page')
// })

// console.log("test",__dirname)

// app.use('/public',express.static('./src/public'));
// app.use('/uploads',express.static('./src/uploads'));

app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));



app.listen(3000)
console.log(`Server on port ${3000}`)

// Express Framework de Nodejs, Curso para principiantes (Javascript en el backend)
// 3:20:59 / 4:00:29