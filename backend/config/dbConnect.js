const { default: mongoose } = require("mongoose");

const dbconnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect Database Succes");
  } catch (err) {
    console.log("Error connect Database");
  }
};

module.exports = dbconnect;
