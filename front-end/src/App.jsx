// rafce
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./Routes/AppRoutes";
const App = () => {
  return (
    <div className="app">
      <Navbar />
     <AppRoutes/>
    </div>
  );
};

export default App;
