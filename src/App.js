import "./App.css";
import React, { useState, useEffect } from "react";
import Splash from "./pages/Splash/Splash";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./pages/works/Works";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6500);
  }, []);
  return (
    <div className='App'>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/works' element={<Works />} />
            </Routes>
            <footer>
              <p>
                Made with love © Copyright 2022, shegami.dev All Rights
                Reserved.
              </p>
            </footer>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
