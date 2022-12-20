import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Project, Contact } from './pages';
import { Nav, Footer } from './components';

function App() {
  return (
      <Router>
        <div className="container">
          <Nav />
          <div className="content">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:code" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
