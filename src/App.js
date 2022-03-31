import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./pages/Country";
import { useEffect, useState } from "react";

function App() {
  const getTheme = !localStorage.getItem("theme")
    ? true
    : JSON.parse(localStorage.getItem("theme"));
  const [toggle, setToggle] = useState(getTheme);

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", true);
    }
  }, []);

  useEffect(() => {
    toggle
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.removeAttribute("data-theme", "light");
    localStorage.setItem("theme", toggle);
  }, [toggle]);

  return (
    <BrowserRouter>
      <section className='backColor'>
        <Navbar handleClick={handleClick} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
