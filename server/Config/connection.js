const mongoose = require('mongoose');

//new database created through MongoDB 1/31/22 and added to Heroku config vars

//npm run start debug successful. npm run build still needs debug as of 2/10/22

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/react-blog-redo',
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);

module.exports = mongoose.connection;