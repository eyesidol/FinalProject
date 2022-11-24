import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
