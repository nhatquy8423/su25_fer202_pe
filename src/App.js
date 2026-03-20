import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import FruitDetail from "./components/FruitDetail";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AddFruit from "./components/AddFruit";
import UpdateFruit from "./components/UpdateFruit";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fruit/:id" element={<FruitDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/add" element={<AddFruit />}></Route>
          <Route path="update/:id" element={<UpdateFruit />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
