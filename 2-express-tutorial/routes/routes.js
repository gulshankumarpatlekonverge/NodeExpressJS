const express = require('express');
const router = express.Router();

const { people } = require('../data');


// GET METHOD

//http://localhost:5000
router.get('/', (req, res) =>{
    res.status(200).json({sucess: 'true', data: people});
 })
 
 router.post('/', (req, res) =>{
     const {name} = req.body;
     if(!name){
         return res.status(400).json({sucess: false, msg: 'please prove name value'});
     }
     res.status(201).send({sucess: true, person: name});
  })
 
 // POST METHOD
 
  router.post('/postman', (req, res) =>{
     const {name} = req.body;
     if(!name){
         return res.status(400).json({sucess: false, msg: 'please provide name value'});
     }
     res.status(201).send({sucess: true, data: [...people, name]});
  })
 
 
 // PUT METHOD
 
 router.put('/:id', (req, res) =>{
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
 
 router.delete('/:id', (req, res) =>{
     const {id} = req.params;
     const person = people.find((person) => person.id === Number(id));
  
     if(!person){
         return res.status(404).send({sucess: false, msg: `no person with id : ${id}`});
     }
      
     const newPeople = people.filter((person) => person.id !== Number(id));
     return res.status(200).json({ sucess: true, msg: newPeople});
  })
 

  module.exports = router;