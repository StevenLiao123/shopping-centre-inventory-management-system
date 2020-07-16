require('dotenv').config();

module.exports = {
  mongoose: {
    uri: process.env.MONGODB_URI || process.env.DB_CONNECTION
  }
};
