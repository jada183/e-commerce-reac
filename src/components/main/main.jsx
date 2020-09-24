import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import Login from "../login/login";
import Caddy from "../caddy/caddy";
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/caddy" component={Caddy} />
        </Switch>
    </main>
);
export default Main;