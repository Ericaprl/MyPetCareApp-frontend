import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./allRoutes";
import { AuthProvider } from "./components/context/AuthContext"
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <>
        <Header />
        <AllRoutes />
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
