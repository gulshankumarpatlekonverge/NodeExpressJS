const express = require('express');
const app = express();

// request => Middleware => response

app.get('/route1', (req, res) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    res.send("The Route1 with Details");
})

// implemetation using middelewear to avoid code repeatation
const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

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
