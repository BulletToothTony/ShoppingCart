import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from './pages/home';
import Shop from './pages/Shop';
import SingleItem from './pages/SingleItem';
import Checkout from './pages/checkout';
import Error from './pages/Error';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/item/:id">
          <SingleItem />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
home page, shop page, checkout page
nav bar with links to both pages and number of items in cart
cards for each product, map over data
in cart should be able to increment, decrement and remove items


*/
