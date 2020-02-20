import React, { Suspense, lazy, ErrorInfo } from "react";
import ReactDOM from 'react-dom';
import { Switch, HashRouter, Route, Link } from "react-router-dom";

// lazy load 并自动重试
function loadView(func: () => Promise<any>) {
    const load = () => func().catch(e => new Promise(rs => {
        setTimeout(() => { rs(load()) }, 2000);
    }));
    return lazy(load);
}

const App = () => (
    <HashRouter>
        <div>XXX System</div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/test'>Test</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>

        <Suspense fallback={<div>Wait......</div>}>
            <Switch>
                <Route path="/about">
                    <div>About</div>
                </Route>
                <Route path="/test" component={loadView(() => import('./Test'))} />
                <Route path="/">
                    <div>Index</div>
                </Route>
            </Switch>
        </Suspense>

    </HashRouter>
)

ReactDOM.render(
    <App />,
    document.getElementById('main')
)