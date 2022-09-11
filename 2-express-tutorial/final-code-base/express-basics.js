const express = require('express');
const app = express();

// Express basics routes
app.get('/', (req, res) => {
    res.status(200).send("Home Page");
})

app.get('/about', (req, res) => {
    res.status(200).send("About Page");
})

// setup static and middleware
const path = require('path');

app.use(express.static('./public'))

app.get('/index',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'./nav-bar-app/index.html'));
})

// adding the static assets and server side rendering(SSR). By putting html file in public you can directly access that file with using sendFile as a root[by commenting out 5 to 21 you can directly access public folder]

// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
