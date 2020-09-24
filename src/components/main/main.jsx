import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home";
import Login from "../login/login";
import Caddy from "../caddy/caddy";
import Products from "../products/products";
import UserInfo from "../userInfo/userInfo";
import Favorites from "../favorites/favorites";
import Offers from "../offers/offers";
import ProductDetail from "../product-detail/productDetail";
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/caddy" component={Caddy} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/userInfo" component={UserInfo} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/product-detail" component={ProductDetail} />
        </Switch>
    </main>
);
export default Main;