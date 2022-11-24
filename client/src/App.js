import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const App = () => {
  const [message, setMessage] = useState("Test Failed No Message");
  const [secondMessage, setSecondMessage] = useState("Handler Test Failed");
  const [mongoMessage, setMongoMessage] = useState("Connecting...");
  const [mongoItem, setMongoItem] = useState("No Item");
  // test fetch, NO handler. Shoes the MESSAGE form endpoint
  useEffect(() => {
    fetch(`/test`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  // test fetch, WITH handler. Shows the DATA from the handler

  useEffect(() => {
    fetch(`/test-message`)
      .then((res) => res.json())
      .then((data) => {
        setSecondMessage(data.data);
      });
  }, []);

  // test fetch, connect to MongoDB and grab all the test items
  useEffect(() => {
    fetch(`/test-mongo`)
      .then((res) => res.json())
      .then((data) => {
        setMongoMessage(data.message);
        // console.log(data);
      });
  }, []);

    // test fetch, connect to MongoDB and grab all the test items
   const {id} = useParams()
    useEffect(() => {
      fetch(`/test-mongo-item/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMongoItem(data.message);
          console.log(data);
        });
    }, []);

  return (
    <div>
      <h1>Test</h1>
      <p>{message}</p>
      <h1>Handler Test</h1>
      <p>{secondMessage}</p>
      <h1>Mongo Test</h1>
      <p>{mongoMessage}</p>
      <p>
        however this is the handlers success message the item is in an array I
        cant render the data form but I can console log it
      </p>
      <h1>Mongo ITEM</h1>
      <p>{mongoItem}</p>
    </div>
  );
};

export default App;
