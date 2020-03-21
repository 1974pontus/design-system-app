import React from "react";
import "./App.css";
import BillingForm from "./components/BillingForm";
import OrderTotal from "./components/OrderTotal";

function App() {
  return (
    <div className='App'>
      
      <BillingForm />
      <OrderTotal />
    </div>
  );
}

export default App;
