import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import IntroPage from "./pages/intro";
import MenuGame from "./pages/menu-game";

const App = props => (
  <React.Fragment>
    <BrowserRouter>
      <div id="margen">
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/menu-game" component={MenuGame} />
      </div>
    </BrowserRouter>
    <div className="footer-copyright">
        &copy; {new Date().getFullYear()} <b>YOLANDA BARRERA y XIMENA CABALLERO</b>
    </div>
  </React.Fragment>
);

export default App;
