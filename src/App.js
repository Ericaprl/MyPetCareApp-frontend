import React from "react";
import Header from "./components/Header"
import AllRoutes from "./allRoutes";
import { AuthProvider } from "./components/context/AuthContext"
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <>
        <Header />
        <AllRoutes />
      </>
    </AuthProvider>
  );
}

export default App;
