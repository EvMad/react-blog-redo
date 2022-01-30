const mongoose = require('mongoose');

//requires new database name for localhost/  where am i determining mongo database name?

//npm run start error from here:

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/react-blog-redo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;