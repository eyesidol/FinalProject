import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Homepage = () => {
  const [message, setMessage] = useState("Test Failed No Message");
  const [secondMessage, setSecondMessage] = useState("Handler Test Failed");
  const [mongoMessage, setMongoMessage] = useState("Connecting...");
  const [mongoItem, setMongoItem] = useState("No Item");

  const { id } = useParams();

  //-------------------------\\
  //-------Test Fetches------\\
  //-------------------------\\

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
        console.log(data.message);
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

  useEffect(() => {
    fetch(`/test-mongo-item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMongoItem(data.data.data);
        console.log(data.message);
      });
  }, [id]);

  //-------------------------\\
  //----END Test Fetches-----\\
  //-------------------------\\

  return (
    <div>
      <h1>Test</h1>
      <p>{message}</p>
      <h1>Handler Test</h1>
      <p>{secondMessage}</p>
      <h1>Mongo Test</h1>
      <p>{mongoMessage}</p>
      <h1>Mongo ITEM</h1>
      <p>{mongoItem}</p>
    </div>
  );
};

export default Homepage;
