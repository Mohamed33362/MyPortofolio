import { Container } from "react-bootstrap";
import Homesec from "./components/HomeSec";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Portofolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex">
      <BrowserRouter basename="/MyPortofolio">
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" exact element={<Homesec />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portofolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
