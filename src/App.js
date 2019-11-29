import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import IntroPage from "./pages/intro";
import MenuGame from "./pages/menu-game";
import VowelStart from "./pages/vowel-start";
import VowelStartGame from "./pages/vowel-start-game";
import VowelFinal from "./pages/vowel-final";

const App = props => (
  <React.Fragment>
    <BrowserRouter>
      <div id="margen">
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/menu-game" component={MenuGame} />
        <Route exact path="/vowel-start" component={VowelStart} />
        <Route exact path="/vowel-start-game/:vowel" component={VowelStartGame} />
        <Route exact path="/vowel-start-game" component={VowelStartGame} />
        <Route exact path="/vowel-final" component={VowelFinal} />
        
      </div>
    </BrowserRouter>
    <div className="footer-copyright">
        &copy; {new Date().getFullYear()} <b>YOLANDA BARRERA y XIMENA CABALLERO</b>
    </div>
  </React.Fragment>
);

export default App;
