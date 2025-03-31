const mongoose = require('mongoose');
module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("success");
      } catch (error) {
        console.log("fails");
        handleError(error);
      }
    // mongoose.connect(process.env.DATABASE);
}