import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Manatee from "./Components/Manatee/Manatee";
import Narwhal from "./Components/Narwhal/Narwhal";
import Whale from "./Components/Whale/Whale";

function App() {
  return (
    <div className="wrapper">
        <h1>Marine Mammals</h1>
        <Router>
            <nav>
                <ul>
                    <li><Link to="/manatee">Manatee</Link></li>
                    <li><Link to="/narwhal">Narwhal</Link></li>
                    <li><Link to="/whale">Whale</Link></li>
                    <li><Link to="/whale/beluga">Beluga Whale</Link></li>
                    <li><Link to="/whale/blue">Blue Whale</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/whale">
                    <Whale />
                </Route>
                <Route  path="/whale/:type">
                    <Whale />
                </Route>
                <Route path="/narwhal">
                    <Narwhal />
                </Route>
                <Route path="/manatee">
                    <Manatee />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
