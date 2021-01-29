import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    test
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
