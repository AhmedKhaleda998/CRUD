const router = require('express').Router();
const personController = require('../controllers/person');

router.get('/persons', personController.getAllPeople);

router.post('/persons', personController.addPerson);

router.get('/persons/:id', personController.getPerson);

router.put('/persons/:id', personController.updatePerson);

router.delete('/persons/:id', personController.deletePerson);

module.exports = router;