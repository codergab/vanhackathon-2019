import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Events from "./components/pages/Events";
import SingleEvent from "./components/pages/Events/single-event";
import SingleJob from "./components/pages/jobs/single-job";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/events" component={Events} />
        <Route path="/event/:name" component={SingleEvent} exact={true} />
        <Route path="/job/:slug" component={SingleJob} />
      </Switch>
    );
  }
}
