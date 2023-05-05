// create controllers

// home page controller (all tasks)
const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

// create task controller
const createTask = (req, res) => {
    res.json(req.body)
}

// get a single task controller
const getTask = (req, res) => {
    res.json({id: req.params.id})
}

// update single task controller
const updateTask = (req, res) => {
    res.send('update task')
}

// delete single task controller
const deleteTask = (req, res) => {
    res.send('delete task')
}




module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}