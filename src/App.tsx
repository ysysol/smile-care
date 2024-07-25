// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import ProtectedRoute from "./ProtectedRoute";

import Login from "./screens/Login/login"; // Assuming you have a Login component
import { logout } from "./services/authService";
function App() {

  const handleLogout = () => {
    logout();
    window.location.href = '/'; // Redirect to login page after logout
  };
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                  <div>
                <Sidebar />
                {/* <button onClick={handleLogout}>Logout</button> */}
                <button onClick={() => window.location.href = '/logout'}>Logout</button>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
