const Task = require('../models/Task.js'); // require model

// create controllers

// home page controller (all tasks)
const getAllTasks = async (req, res) => {
    try {
        // return all tasks 
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        // return error
        res.status(500).json( { msg: error })
    }
}

// create task controller
const createTask = async (req, res) => {
    // if error not occured (if every property from model is filled out)
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// get a single task controller
const getTask = async (req, res) => {
    try {
        // get specific ID 
        const { id: taskID } = req.params
        // find ID 
        const task = await Task.findOne({ _id: taskID });
        // check if task doesn't exist
        if (!task) {
            return res.status(404).json({ msg: `No task with ID: ${ taskID }.`})
        }
        // otherwise return task
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// update single task controller
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        // it takes three parameters - id, the data we want to update and options
        const task = await Task.findOneAndUpdate(
            { _id: taskID }, 
            req.body, 
            // new: always require new item
            { new: true, runValidators: true }
        )

        if (!task) {
            res.status(404).json({ msg: `No task with ID: ${ taskID }.` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


// delete single task controller
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with ID: ${ taskID }.`})
        } 
        res.status(200).json({ task })
        // we don't have to return task
        // res.status(200).json({task: null, status: 'success'})
        // res.status(200).send()
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
