import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import MainLayout from "./layout/MainLayout";
import React from 'react';
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";





function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
       <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="deep-dive/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} /> 
      </Route>
    </Routes>
  );
}

export default App;
