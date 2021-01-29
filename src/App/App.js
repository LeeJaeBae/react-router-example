import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Routes from "../Routes";

function App() {
    return (
        <Router basename={''}>
            <Switch>
                <Route exact {...Routes.home}/>
            </Switch>
        </Router>
    );
}

export default App;
