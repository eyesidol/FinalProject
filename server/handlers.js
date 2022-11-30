
const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { query, response } = require("express");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const setlistKey = process.env.SETLIST_KEY

//-------------------------\\
//-----Test Handlers------\\
//-------------------------\\
// test data for test handler
const testData =
  "Hello, this is a handler test message from const testData. I am the data, not message";
// this is a test handler, displayes test message
const getTestMessage = (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      data: testData,
      message: "This was a successful 2nd test",
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
  result
    ? res
        .status(200)
        .json({
          status: 200,
          data: result,
          message: " Mongo Test Successful, this is the message not the data",
        })
    : res.status(404).json({ status: 404, message: "ERROR FAILED TEST" });
  client.close();
};
// this handler tests getting a single item from Mongo DB via params
const getMongoItem = async (req, res) => {
  const _id = req.params.id;

  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("finalproject");
  const result = await db.collection("test").findOne({ _id: _id });
  result
    ? res
        .status(200)
        .json({
          status: 200,
          data: result,
          message: " Mongo ITEM Successful, I am the message not the data",
        })
    : res.status(404).json({ status: 404, message: "ERROR FAILED TEST" });
  client.close();
};
//-------------------------\\
//----END Test Handlers----\\
//-------------------------\\

const getArtist = async (req, res) => {
  res.set('Content-Type', 'application/json');
  res.set('x-api-key', `${setlistKey}`);
  const test = res.get('Content-Type')
  console.log(test)
  const test2 = res.get('x-api-key')
  console.log(test2)

  const id = req.params.id;
  console.log(id)
// AXIOS ???
  try {
    const result = await get(`https://api.setlist.fm/rest/1.0/artist/${id}`); 
    // const artist = JSON.parse(result); 
    console.log(result)


  } catch (err) {
    console.log('Error: ', err);
  }
};

// console.log(setlistKey)


module.exports = {
  getTestMessage,
  getMongoTest,
  getMongoItem,
  getArtist
};
