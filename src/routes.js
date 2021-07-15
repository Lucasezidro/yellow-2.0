import React from 'react'
import { history } from './history'
import { Router, Route, Switch } from 'react-router'
import PrivateRouter from './components/PrivateRoute'

import Home from './pages/Home/index'
import Dashboard from './pages/Dashboard'
import CreateAccount from './pages/createAccount/index'

export default function Routes(){
    return(
        <Router history={history}>
            <Switch>
                <Route component={Home} exact path="/"/>
                <Route component={Dashboard} exact path="/dashboard"/>
                <Route component={CreateAccount}  path="/createAccount"/>
            </Switch>
        </Router>
    )
}