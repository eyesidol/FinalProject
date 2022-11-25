const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const port = 8000;

const { getTestMessage, getMongoTest, getMongoItem } = require("./handlers");

express()
  //Allows server to auto-parse REQ.BODY.
  //Normally, send as JSON string.
  //This makes it "already" and object
  .use(express.json())
  .use(helmet())
  .use(morgan("tiny"))

  //-------------------------\\
  //-----Test Endpoints------\\
  //-------------------------\\
  // test endpoint, NO handler
  .get("/test", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "Success! Connected to the Test Endpoint",
    });
  })
  // test endpoint WITH handler
  .get("/test-message", getTestMessage)
  // test endpoint for MongoDB
  .get("/test-mongo", getMongoTest)
  // test endpoint for MongoDB ONE ITEM
  .get("/test-mongo-item/:id", getMongoItem)
  //-------------------------\\
  //----END Test Endpoints---\\
  //-------------------------\\





  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
