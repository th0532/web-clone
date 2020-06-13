import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import Home from "./routes/home";


function App() {
  return (
    <HashRouter>
          <Route path ="/" exact ={true} component={Home}/>
    </HashRouter>
  );
}



export default App;
