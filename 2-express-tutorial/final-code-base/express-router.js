const express = require('express');
const app = express();

const router = require('./routes/routes');
const login = require('./routes/login');

// static files
app.use(express.static('./http-methods'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use('/api/people', router)
app.use('/login', login)


// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
