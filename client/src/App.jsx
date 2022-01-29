import React from "react";
import "./App.css";
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  Loader,
} from "./components";

const App = () => {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Footer />
    </>
  );
};

export default App;
