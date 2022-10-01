import FingerPrint from "./components/FingerPrint/FingerPrint";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ResultModal from "./components/ResultModal/ResultModal";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const isCheckingActive = useSelector(state => state.isCheckingActive);
  const isModalActive = useSelector(state => state.isModalActive);
  const isFinished = useSelector(state => state.isFinished);

  return (
    <div
      className="app"
      data-after={ isModalActive ? "It was so simply!" : "Just fill all form fields" }
      data-before={ isModalActive ? "Wasn't it?" : "... and confirm it!" }
    >
      <Header />
      { !isFinished && <Breadcrumbs /> }
      { isCheckingActive && <FingerPrint /> }
      { !isModalActive ? <Form /> : null }
      { isModalActive ? <ResultModal /> : null }
      <Footer />
    </div>
  );
}

export default App;


//{ isCheckingActive && <FingerPrint /> }
//<Form />
