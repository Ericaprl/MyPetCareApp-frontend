import React from "react";
import Header from "./components/Header"
import Routes from "./allRoutes";
import { AuthProvider } from "./components/context/AuthContext"
import "./index.css";

function App() {
  return (
    <AuthProvider>

      <>

        <Header />
        <Routes />
        
      </>

    </AuthProvider>
  );
}

export default App;
