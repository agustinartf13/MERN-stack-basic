import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Login, MainApp, Register } from '../../pages'

const Routes = () => {
    return (

        <Router>
            <Switch>
                <Router path="/login">
                    <Login></Login>
                </Router>
                <Router path="/register">
                    <Register></Register>
                </Router>
                <Router path="/">
                    <MainApp></MainApp>
                </Router>
            </Switch>
        </Router>
    )
}

export default Routes