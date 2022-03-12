import { Route, Switch } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Home from "./Home";
import NotFound from "./NotFound";

function Main() {
  return (
    <div className="home-section flex-80">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
