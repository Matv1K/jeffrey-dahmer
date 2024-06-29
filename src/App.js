import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import {
  Home,
  About,
  Men,
  Shop,
  Women,
  Contact,
  Kids,
  ShoppingItemDetails,
} from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/men" element={<Men />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/shoppingItem/:id" element={<ShoppingItemDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
