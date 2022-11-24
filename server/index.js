const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// Do I need to add a proxy at some point?
const port = 8000;

express()
  // allows server to auto-parse REQ.BODY. Normally, send as JSON string. This makes it "already" and object

  .use(express.json())
  .use(helmet())
  .use(morgan("tiny"))
  .get("/test", (req, res) => {
    res.status(200).json({
      status: 200,
      message: "Success! Connected to the Test Endpoint",
    });
  })

  .listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
