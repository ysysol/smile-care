// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./screens/dashboard";
import Contact from "./screens/contactus";
import Subscription from "./screens/subscription";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/home";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./screens/Login/login"; // Assuming you have a Login component
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />          
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
