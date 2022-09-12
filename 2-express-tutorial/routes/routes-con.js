const express = require('express');
const router = express.Router();

const { 
    getPeople, 
    createPeople, 
    createPeoplePostman, 
    updatePeopleData, 
    deletePeopleData } = require('../controller/people')

router.get('/', getPeople)
router.post('/', createPeople)
router.post('/postman', createPeoplePostman)
router.put('/:id', updatePeopleData)
router.delete('/:id', deletePeopleData)
 

// router.route('/').get(getPeople).post(createPeople);
// router.route('/postman').post(createPeoplePostman);
// router.route('/:id').put(updatePeopleData).delete(deletePeopleData);

module.exports = router;