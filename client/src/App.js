import Homepage from "./Homepage";
import Test from "./Test";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/test-page" element={<Test LoginButton={LoginButton} LogoutButton={LogoutButton} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
