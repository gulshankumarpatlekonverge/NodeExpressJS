const express = require('express');
const app = express();
const morgan = require('morgan')
const logger = require('./logger');
const authorize = require('./authorize');

// request => Middleware => response

//handing middeleware using own functionality
// app.use([logger, authorize]); 
// app.use(express.static('./public'));

//handling middleware using morgan
app.use(morgan('tiny'));

// Path: http://localhost:5000/?user=john
app.get('/', (req, res) =>{
    res.send("Home");
})

app.get('/about', (req, res) =>{
    res.send("About");
})

// Path: http://localhost:5000/api/product?user=john
app.get('/api/product', (req, res) =>{
    console.log(req.user);
    res.send("Product");
})

app.get('/api/item', (req, res) =>{
    res.send("Item")
})

// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
