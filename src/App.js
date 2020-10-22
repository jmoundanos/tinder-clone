import React from 'react';
import Header from "./Header";
import Cards from "./TinderCard";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
  <div className="App">
  <Header />
    <Router>
      <Switch>
        <Route path="/card">
           <Cards /> 
        </Route>
        <Route path="/">
        </Route>
     
      
      {/* <Buttons/>
      <Chat Screen/>
      <Idividual Chat Screen/> */}
        </Switch>
     </Router>
  </div>
  );
}

export default App;
