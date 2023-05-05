const mongoose = require('mongoose') // require mongoose 

// URI string - transfered in dotenv file

// connest DATABASE

// mongoose.connect(connectionString)
//     .then(() => console.log('CONNECTED TO THE DB..'))
//     .catch((err) => console.log(err))


// restructure this above
// create function that can be used in app.js file
// want to chack if data base is okay and working properly
// in that case start server, otherwise kill the application 

const connectDB = (url) => {
    return mongoose.connect(url)
}

// export it!
module.exports = connectDB
