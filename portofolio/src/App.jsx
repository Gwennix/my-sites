import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsTab from "./pages/ProjectsTab";
import Navigation from "./pages/Navigation";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projectstab" element={<ProjectsTab />} />
          <Route path="projects/:id" element={<ProjectsPage/>} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
