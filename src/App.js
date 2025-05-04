import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";    // <-- Capital L
import Signup from "./pages/Signup";  // <-- Capital S
import Home from "./pages/PLP";      // Your main PLP page

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
