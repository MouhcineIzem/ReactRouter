import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Manatee from "./Components/Manatee/Manatee";
import Narwhal from "./Components/Narwhal/Narwhal";
import Whale from "./Components/Whale/Whale";

function App() {
  return (
    <div className="wrapper">
        <h1>Marine Mammals</h1>
        <Router>
            <Route path="/whale">
                <Whale />
            </Route>
            <Route path="/narwhal">
                <Narwhal />
            </Route>
            <Route path="/manatee">
                <Manatee />
            </Route>

        </Router>


    </div>
  );
}

export default App;
