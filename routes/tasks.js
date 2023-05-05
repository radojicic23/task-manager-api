const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks.js')

// home route
router.get('/', getAllTasks)
// create task
router.post('/', createTask)
// get a single task route
router.get('/:id', getTask)
// update task 
router.patch('/:id', updateTask)
// delete task 
router.delete('/:id', deleteTask)



module.exports = router
