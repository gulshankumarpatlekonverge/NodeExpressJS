const express = require('express');
const app = express();

const { people } = require('./data');

// static files
app.use(express.static('./http-methods'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// GET METHOD

//http://localhost:5000/api/people
app.get('/api/people', (req, res) =>{
   res.status(200).json({sucess: 'true', data: people});
})

app.post('/api/people', (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess: false, msg: 'please prove name value'});
    }
    res.status(201).send({sucess: true, person: name});
 })

// POST METHOD

 app.post('/api/postman/people', (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess: false, msg: 'please provide name value'});
    }
    res.status(201).send({sucess: true, data: [...people, name]});
 })

//http://localhost:5000/login
app.post('/login', (req, res) =>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    return res.status(200).send('Please Provide Valid Credentials.');
})

// PUT METHOD

app.put('/api/people/:id', (req, res) =>{
   const {id} = req.params;
   const {name} = req.body;

   const person = people.find((person) => person.id === Number(id));

    if(!person){
        return res.status(404).send({sucess: false, msg: `no person with id : ${id}`});
    }
    
    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ sucess: true, data: newPeople});
})

// DELETE METHOD

app.delete('/api/people/:id', (req, res) =>{
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
 
    if(!person){
        return res.status(404).send({sucess: false, msg: `no person with id : ${id}`});
    }
     
    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ sucess: true, msg: newPeople});
 })

// error notation 
app.all('*', (req, res) => {
    res.status(400).send('<h1>Page not found</h1>');
})

// server configuration
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})
