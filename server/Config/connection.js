const mongoose = require('mongoose');

//requires new database name for localhost/  where am i determining mongo database name?

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/the-daily-rebound',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

module.exports = mongoose.connection;