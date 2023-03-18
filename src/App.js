import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/"  exact element={<Dashboard />} />
          <Route path="/pro"  exact element={<Projects />} />
          <Route path="/about"  exact element={<AboutMe />} />
          
      </Routes>
    </Router>
    
  );
}

export default App;
