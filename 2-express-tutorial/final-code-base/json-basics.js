const express = require('express');
const app = express();
const {products, people} = require('./data');

app.get('/json',(req, res) =>{
    res.json([{name: 'john'}, {name: 'susan'}]);
})

app.get('/products',(req, res) =>{
    res.json(products);
})

app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProduct= products.map(product =>{
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProduct);
})

app.get('/api/products/1', (req, res) => {
    const singleProduct= products.find(product => product.id ===1);
    res.json(singleProduct);
})

http://localhost:5000/api/products/1
app.get('/api/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const singleProduct= products.find(product => product.id === Number(productId));

    if(!singleProduct){
        return res.status(404).send("Product Not Found")
    }
    res.json(singleProduct);
})

// route: http://localhost:5000/api/products/1/review/asdf
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    // console.log(req.params.productId);
    // console.log(req.params.reviewId);
    console.log(req.params);
    res.send("Hello World")
})

// route: http://localhost:5000/api/v1/query?name=Gulshankumar&username=patlegulshankn
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    res.send("Hello World")
})

//route: http://localhost:5000/api/v2/query?search=al&limit=1
app.get('/api/v2/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProduct = [...products];

    if(search){
        sortedProduct = sortedProduct.filter((product) =>{
            return product.name.startsWith(search);
        })
    }

    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit));
    }

    if(sortedProduct < 1){
        // return res.status(200).send("No Products Matches your Search.");
        return res.status(200).json({ success: true, data:[]})
    }
    res.status(200).json(sortedProduct);
})

// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
