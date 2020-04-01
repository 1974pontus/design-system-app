import React from "react";
import "./App.css"
import MainLayout from "./components/MainLayout"
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./context";

//Här deklarerar vi CartProvider för att ha tillgång i hela Appen.

  const App = () => {
    return (
      <Router>
        <CartProvider>
            <div className='App'>     
              <MainLayout />
            </div>
        </CartProvider>
      </Router>
    )
  }

  
 export default App
