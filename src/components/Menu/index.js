import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../../pages/Home/Home'
import News from '../../pages/News/News'
import TodoList from '../../pages/TodoList/TodoList'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/">Home</Link> | 
                        <Link to="/News">News</Link> | 
                        <Link to="/TodoList">TodoList</Link>
                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/News" component={News} />
                        <Route path="/TodoList" component={TodoList} />
                    </div>
                </Router>
            </div>
        )
    }
}
