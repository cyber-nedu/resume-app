import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contacts/Contacts";
import NotFound from "./not-found/NotFound";

function App() {

  const location = useLocation()
  const isNotFound = location.pathname !== '/' &&
    !["/about", "/skills", "/projects", "/contacts"].includes(location.pathname)
  return (
    <div className="App">
      {! isNotFound && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>

        {! isNotFound && <Footer />}
    </div>
  );
}

export default App;