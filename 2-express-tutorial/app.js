const { readFileSync } = require('fs');
const http = require('http');

const htmlFile = readFileSync('./index.html');
const homePage = readFileSync('./nav-bar-app/index.html');
const homePageStyle = readFileSync('./nav-bar-app/style.css');
const homePageJS = readFileSync('./nav-bar-app/index.js');
const homePageLogo = readFileSync('./nav-bar-app/logo.png');
const server = http.createServer((req, res) =>{
    console.log('User Hit The Server');
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Home Page<h1>')
        res.end('Home Page Details');
    } else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page<h1>')
        res.end('About Page Details');
    } else if(url === '/htmlFile'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(htmlFile)
        res.end();
    } else if(url === '/homePage'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage)
        res.end();
    }else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homePageStyle);
        res.end();
    }else if(url === '/index.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homePageJS);
        res.end();
    }else if(url === '/logo.png'){
        res.writeHead(200, {'content-type': 'text/png'});
        res.write(homePageLogo);
        res.end();
    } else{
        res.writeHead(400, {'content-type': 'text/html'});
        res.write('<h1>Page not found<h1>')
        res.end(' Page Details not found');
    }
});

server.listen(5000);