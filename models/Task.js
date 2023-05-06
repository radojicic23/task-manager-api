const mongoose = require("mongoose");

// create mongo Model
// Only the properties that is set in schema will be passed on to DB
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        // propertie must be filled in
        required: [true, 'Must provide name.'],
        // if user type like this '    user  '
        // remove spaces
        trim: true,
        // maximum characters boundarie
        maxlength: [20, 'Name can not be more than 20 characters.']
    },
    completed: {
        type: Boolean,
        // by default task is not gonna be completed (crosed out in this case)
        default: false
    }
})

// add validation so that schema can't be sent empty or with one of the properties empty
// all properties are required to be filled in


module.exports = mongoose.model('Task', TaskSchema)
