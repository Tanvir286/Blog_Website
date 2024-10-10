const mongoose = require('mongoose');

let MongoDBConfig = () => {
  mongoose.connect('mongodb+srv://nodejs:uAZIXV95bN4h5E1F@cluster0.uxmdy.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
 .then(() => console.log('Database Connected!'))
 .catch((error) => {
    console.log('Database Connection Failed', error);
  });
}

module.exports = MongoDBConfig;
