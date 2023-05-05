const express = require('express');

const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js')
// access dotenv and envoke it 
require('dotenv').config()

const app = express();

// middleware
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('Home page.')
})

// home page
app.use('/api/v1/tasks', tasks)

// structure:

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

// CRUD - CREATE, READ, UPDATE AND DELETE


// want to chack if data base is okay and working properly
// in that case start server, otherwise kill the application or throw error
const start = async () => {
    try {
        // spin up / start the server if connection with data base is successfull!
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log('Server listening on port 3000.');
        })
    } catch (error) {
        console.log(error);
    }
}


start()
