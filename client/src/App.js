import { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("Test Failed No Message");
  const [secondMessage, setSecondMessage] = useState("Handler Test Failed");

  // test fetch, NO handler
  useEffect(() => {
    fetch("/test").then((res) =>
      res
        .json()
        .then((data) => setMessage(data.message))
        .catch((e) => console.log("Error, no message", e))
    );
  }, []);

  // test fetch, WITH handler
  useEffect(() => {
    fetch("/test-message").then((res) =>
      res
        .json()
        .then((data) => setSecondMessage(data.data))
        .catch((e) => console.log("Error, no message", e))
    );
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <p>{message}</p>
      <h1>Handler Test</h1>
      <p>{secondMessage}</p>
    </div>
  );
};

export default App;
