import {useState, useEffect} from "react"



const App = () => {
  const [message, setMessage] = useState("Test Failed No Message");

  useEffect(() => {
    fetch("/test").then((res) =>
      res
        .json()
        .then((data) => setMessage(data.message))
        .catch((e) => console.log("Error, no message", e))
    );
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default App;
