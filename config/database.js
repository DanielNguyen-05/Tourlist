const mongoose = require('mongoose');
module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("success");
      } catch (error) {
        console.log(error);
        console.log("fails");
      }
    // mongoose.connect(process.env.DATABASE);
}