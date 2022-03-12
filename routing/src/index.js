import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NotFound from './components/NotFound';
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/articles">
      <Articles />
    </Route>
    <Route path="/articles/:slug" component={Article}>
    </Route>
    <Route path="/" exact>
      <App />
    </Route>    
    <Route path="*">
      <NotFound />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
