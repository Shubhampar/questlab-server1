const express = require("express");
const messageModal = require("../Modal/message.modal");
const messageRouter = express.Router();

messageRouter.post("/add", async (req, res) => {
  console.log("req",req.body)
  const { message } = req.body;
  try {
    let doctor = new messageModal({
      message,
    });
    await doctor.save();
    res.status(200).send({ msg: "message  data added Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Failed Add Data" });
  }
});
messageRouter.get("/", async (req, res) => {
  try {
    try {
      let doctor = await messageModal.find();
      res.status(200).send({ msg: doctor });
    } catch (err) {
      res.status(400).send({ msg: "Something wrong" });
    }
  } catch (err) {
    console.log("err", err);
  }
});

module.exports = messageRouter;
