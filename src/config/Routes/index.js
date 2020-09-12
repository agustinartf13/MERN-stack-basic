import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

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
                    <Home></Home>
                </Router>
            </Switch>
        </Router>
    )
}

export default Routes