import React from "react";
import { Button } from 'antd'
import "./App.css";
import pic from './tres_commas.jpg'

function App() {
  return (
    <div className='App'>
      <h1>design-system-app</h1>
      <h3>Trés Commás</h3>
      <Button type='default'>Buy Me!</Button>
      <img src={pic} alt="Trés Commás"/>
    </div>
  );
}

export default App;
