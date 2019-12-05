import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import News from '../../pages/News/News';
import NewsContent from '../../components/NewsContent';
import TodoList from '../../pages/TodoList/TodoList';
import User from '../../pages/User/User';


/**
 * 菜单路由组件
 * @author LongTeng 2019-12-05
 */
export default class Menu extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/">Home</Link> | 
                        <Link to="/Login">Login</Link> | 
                        <Link to="/News">News</Link> | 
                        <Link to="/TodoList">TodoList</Link> | 
                        <Link to="/User">User</Link>
                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/Login" component={Login} />
                        <Route path="/News" component={News} />
                        <Route path="/TodoList" component={TodoList} />
                        <Route path="/User" component={User} />
                        <Route path="/NewsContent/:aid" component={NewsContent} />
                    </div>
                </Router>
            </div>
        )
    }
}
