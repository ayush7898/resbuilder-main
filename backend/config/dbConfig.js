const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/resumeBuilder';

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000, 
//   socketTimeoutMS: 45000, 
// };

mongoose.connect(dbURI)
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });