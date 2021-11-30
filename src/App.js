import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Pages/Shared/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
