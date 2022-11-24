const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { query } = require("express");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// test data for test handler
const testData = "Hello, this is a handler test message";

// this is a test handler, displayes test message
const getTestMessage = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      data: testData,
      Message: "This was a successful 2nd test",
    });
  } catch {
    res.status(400).json({
      status: 400,
      message: "Something went wrong! No Special Message!",
    });
  }
};

// this handler tests MongoDB
const getMongoTest = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("finalproject");
  const result = await db.collection("test").find().toArray();
  //   console.log(result[0].data);
  result
    ? res
        .status(200)
        .json({ status: 200, data: result, message: " Mongo Test Successful" })
    : res.status(404).json({ status: 404, message: "ERROR FAILED TEST" });
  client.close();
};

const getMongoItem = async (req, res) => {
  const  _id  = req.params.id;

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("finalproject");
  const result = await db.collection("test").findOne({ _id: _id });
  console.log(req.params)
  console.log(_id);
  console.log(result);
  result
    ? res
        .status(200)
        .json({ status: 200, data: result, message: " Mongo ITEM Successful" })
    : res.status(404).json({ status: 404, message: "ERROR FAILED TEST" });
  client.close();
};

module.exports = {
  getTestMessage,
  getMongoTest,
  getMongoItem,
};
