import FingerPrint from "./components/FingerPrint/FingerPrint";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <FingerPrint />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
