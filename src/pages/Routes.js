import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './pages';
import Login from './pages/login';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/about" component={About} />
                    <Route path="/blogs" component={Blogs} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        )
    }
}