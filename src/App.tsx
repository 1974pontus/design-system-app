import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout"
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from "./context";


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
