const express = require('express');
const router = express.Router();

//http://localhost:5000/login/
router.post('/', (req, res) =>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    return res.status(200).send('Please Provide Valid Credentials.');
})

module.exports = router;