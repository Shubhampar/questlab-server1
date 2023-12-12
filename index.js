const express = require("express");
require("dotenv").config();
const messageRouter = require('./routes/message.route')
const app = express();


const { connection } = require("./db");
app.use(express.json());
app.use('/',messageRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`${process.env.PORT} is Running`);
  } catch (err) {
    console.log("err", err);
  }
});
