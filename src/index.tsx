import React from "react";
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

const TestComponent = loadable(() => import("./Test"), {
    fallback: <div>Waiting...</div>
});

const App = () => (
    <HashRouter>
        <div>XXX System</div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/test'>Test</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
        <Switch>
            <Route path="/about">
                <div>About</div>
            </Route>
            <Route path="/test" component={TestComponent} />
            <Route path="/">
                <div>Index</div>
            </Route>
        </Switch>
    </HashRouter>
)

ReactDOM.render(
    <App />,
    document.getElementById('main')
)