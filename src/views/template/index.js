import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Modal } from "../../components";
import Todos from "../todos";
import Favorites from "../favorites";
import Incomplete from "../incomplete";
import TasksSearch from "../tasks-search";
import { TemplateContainer, TemplateContainerOverFlow } from "./styles";

const Template = () => (
  <Router>
    <Header />
    <TemplateContainerOverFlow>
      <TemplateContainer>
        <Modal />
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route exact path="/favs" component={Favorites} />
          <Route exact path="/incomplete" component={Incomplete} />
          <Route exact path="/search/:taskTitle" component={TasksSearch} />
        </Switch>
      </TemplateContainer>
    </TemplateContainerOverFlow>
  </Router>
);

export default Template;
