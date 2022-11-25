import Homepage from "./Homepage";
import Test from "./Test";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/test-page" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
