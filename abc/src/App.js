import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/home";
import Main from "./ImagesReact/img.jsx";
import Slideshow from "./slideshow/slideshow.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/file" component={Main}></Route>
          <Route exact path="/slideshow" component={Slideshow}></Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
