import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./pages/Country";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
