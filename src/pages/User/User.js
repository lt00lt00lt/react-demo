import React, { Component } from 'react';
import './User.css';
import { Route, Link } from "react-router-dom";

import Info from './Info';
import Main from './Main';

/**
 * 路由嵌套功能
 * @author LongTeng 2019-12-05
 */
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="content">
                    {/* <Router> */}
                        <div className="left">
                            <Link to="/User/">个人中心</Link>
                            <br />
                            <Link to="/User/Info/">用户信息</Link>
                        </div>
                        <div className="right">
                            <Route exact path="/User/" component={Main} />
                            <Route path="/User/Info/" component={Info} />
                        </div>
                    {/* </Router> */}
                </div>
            </div>
        )
    }
}
