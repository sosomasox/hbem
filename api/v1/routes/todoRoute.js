var express = require('express');
var ToDoController = require('../controllers/todoController.js');
var router = express.Router();

router.get('/', ToDoController.all_todo);
router.get('/date/:date', ToDoController.load_todo);
router.post('/', ToDoController.create_todo);
router.put('/id/:id', ToDoController.update_todo);
router.delete('/id/:id', ToDoController.delete_todo);
module.exports = router;
