import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import List from '../screens/List'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ItemDetail from '../screens/ItemDetail'

import NavigationHelper from './helper/NavigationHelper'

export default function Base() {
    return (
        <Router>
            <NavigationHelper />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/checklist">
                    <List />
                </Route>
                <Route exact path="/checklist/:listId/item">
                    <ItemDetail />
                </Route>
            </Switch>
        </Router>
    )
}