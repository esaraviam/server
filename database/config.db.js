const mongoose = require('mongoose');

const connection_str = 'mongodb://mongodb:27017/desafio_walmart';

const dbConnection = async () => {
  try {
    await mongoose.connect(connection_str, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('DB connected!');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  dbConnection,
};
