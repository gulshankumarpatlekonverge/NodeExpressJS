const express = require('express');
const app = express();
const logger = require('./logger');

// request => Middleware => response

app.use('/api', logger); // if you remove the path it will apply for all the routes under the hood else it will go for sprcific route

app.get('/home', (req, res) =>{
    res.send("Home");
})

app.get('/about', (req, res) =>{
    res.send("About");
})

app.get('/api/product', (req, res) =>{
    res.send("Product");
})

app.get('/api/item', (req, res) =>{
    res.send("Item");
})

// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
