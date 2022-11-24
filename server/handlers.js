const testData = "Hello, this is a handler test message";

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

module.exports = {
  getTestMessage,
};
