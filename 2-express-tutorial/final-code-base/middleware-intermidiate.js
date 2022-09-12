const express = require('express');
const app = express();
const logger = require('./logger')

// request => Middleware => response

app.get('/route1', logger, (req, res) =>{
    res.send("The Route1 with Details");
})

app.get('/route2', logger, (req, res) =>{
    res.send("The Route2 with Details");
})

app.get('/route3', logger, (req, res) =>{
    res.send("The Route3 with Details");
})

// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
