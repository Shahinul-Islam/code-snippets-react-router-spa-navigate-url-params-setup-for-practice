// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Support from "./components/Support/Support";
import Contact from "./components/Contact/Contact";
import Friends from "./components/Friends/Friends";
import SingleFriendDetails from "./components/SingleFriendDetails/SingleFriendDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="friends" element={<Friends></Friends>}></Route>
        <Route path="friends/:friendId" element={<SingleFriendDetails />}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="support" element={<Support></Support>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
