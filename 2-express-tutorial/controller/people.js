const { people } = require('../data')

const getPeople = (req, res) =>{
    res.status(200).json({sucess: 'true', data: people});
 }

 const createPeople =  (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess: false, msg: 'please provide name value'});
    }
    res.status(201).send({sucess: true, person: name});
 }

 const createPeoplePostman = (req, res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({sucess: false, msg: 'please provide name value'});
    }
    res.status(201).send({sucess: true, data: [...people, name]});
 }

 const updatePeopleData = (req, res) =>{
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
 }

 const deletePeopleData = (req, res) =>{
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
 
    if(!person){
        return res.status(404).send({sucess: false, msg: `no person with id : ${id}`});
    }
     
    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ sucess: true, msg: newPeople});
 }

 module.exports ={
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeopleData,
    deletePeopleData
 }