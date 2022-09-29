import FingerPrint from "./components/FingerPrint/FingerPrint";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const isActive = useSelector(state => state.isCheckingActive);

  return (
    <div className="app">
      <Header />
      <Breadcrumbs />
      { isActive && <FingerPrint /> }
      <Form />
      <Footer />
    </div>
  );
}

export default App;
