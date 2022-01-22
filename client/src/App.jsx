import React from "react";
import "./App.css";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Navbar />
        {/* <Welcome /> */}
      </div>
      <Services />
      {/* <Transactions /> */}
      <Footer />
    </>
  );
};

export default App;
