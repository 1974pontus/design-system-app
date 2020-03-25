import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout"
import { BrowserRouter as Router } from 'react-router-dom';


  const App = () => {
    return (
      <Router>
            <div className='App'>     
              <MainLayout />
            </div>
      </Router>
    )
  }

  
 export default App
