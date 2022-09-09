const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end('Welcome to home page.');
    } else if(req.url === "/about"){
        res.end('Welcome you in about page.');
    } else{
        res.end(`
            <h1>Ooops!</h1>
            <p>Something went wrong</p>
        `)
    }
})

server.listen(5000)
