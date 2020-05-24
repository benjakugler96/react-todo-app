import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../../components";
import Todos from "../todos";
import Favorites from "../favorites";
import Incomplete from "../incomplete";
import { TemplateContainer } from "./styles";

const Template = () => (
  <Router>
    <Header />
    <TemplateContainer>
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/favs" component={Favorites} />
        <Route exact path="/incomplete" component={Incomplete} />
      </Switch>
    </TemplateContainer>
  </Router>
);

export default Template;
