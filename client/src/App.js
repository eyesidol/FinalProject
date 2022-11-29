import Homepage from "./Homepage";
import Test from "./Test";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
// pass profile down?
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
      <Routes>
        <Route path="/:id" element={<Homepage  />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/test-page" element={<Test LoginButton={LoginButton} LogoutButton={LogoutButton} />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
