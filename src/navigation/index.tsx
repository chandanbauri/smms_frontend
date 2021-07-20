import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../pages/home"
import Product from "../pages/product"
function NavigationRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  )
}

export default NavigationRouter
