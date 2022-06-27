import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;
