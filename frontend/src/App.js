import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import Tutorial from "./components/Tutorial";
import AddTutorial from "./components/AddTutorial";
import TutorialsList from "./components/TutorialsList";



function App() {
  return (
    <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/tutorials" className="navbar-brand">
                bezKoder
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/tutorials"} className="nav-link">
                    Tutorials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add
                  </Link>
                </li>
              </div>
            </nav>

            <div className="container mt-3">
              <Routes>
                <Route path="/" element={<TutorialsList/>} />
                <Route path="/tutorials" element={<TutorialsList/>} />
                <Route path="/add" element={<AddTutorial/>} />
                <Route path="/tutorials/:id" element={<Tutorial/>} />
              </Routes>
            </div>
          </div>
  );
}

export default App;
