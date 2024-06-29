// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./screens/dashboard";
import Contact from "./screens/contactus";
import Subscription from "./screens/subscription";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
       
            <Sidebar />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
