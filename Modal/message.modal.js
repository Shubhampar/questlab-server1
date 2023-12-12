const mongoose = require("mongoose");
const messageSchema = mongoose.Schema(
  {
    message: String,
  },
  {
    versionKey: false,
  }
);

const messageModal=mongoose.model("message",messageSchema);
module.exports=messageModal